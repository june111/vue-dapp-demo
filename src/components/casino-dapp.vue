<template>
  <div class="casino">
    <button @click="checkNetwork" class="networkBtn">Network</button>
    <div v-if="showEnv" class="network">
      <p>Welcome to the <span v-if="isMetamask">Metamask</span></p>
      <p>{{network}}</p>
    </div>
    <h1>Welcome to the Casino</h1>
    <p>奖池：<span>{{contractBalance}}</span> ETH</p>
    下注:
    <input v-model="amount" placeholder="0">Ether
    <h4>猜数字（1～10）</h4>
    <ul>
      <li v-on:click="clickNumber">1</li>
      <li v-on:click="clickNumber">2</li>
      <li v-on:click="clickNumber">3</li>
      <li v-on:click="clickNumber">4</li>
      <li v-on:click="clickNumber">5</li>
      <li v-on:click="clickNumber">6</li>
      <li v-on:click="clickNumber">7</li>
      <li v-on:click="clickNumber">8</li>
      <li v-on:click="clickNumber">9</li>
      <li v-on:click="clickNumber">10</li>
    </ul>
    <img v-if="pending" id="loader" src="https://loading.io/spinners/double-ring/lg.double-ring-spinner.gif" />
    <p>账户：<span>{{myAddress}}</span></p>
    <p>余额：<span>{{accountBalance}}</span> ETH</p>
    <div class="event" v-if="winEvent">
      <p>您猜的是：<span>{{chooseNum}}</span></p>
      <p>开奖：中奖数字为<span>{{luckyNum}}</span></p>
      <p v-if="winEvent._status" id="has-won">
        不得了了, 中奖 {{winEvent._amount}} ETH
      </p>
      <p v-else id="has-lost">
        没中诶，再接再厉吧
      </p>
    </div>
  </div>
</template>
<script>
import Web3 from 'web3'
import abi from 'ethereumjs-abi'
import EthereumTx from 'ethereumjs-tx'

export default {
  created() {
    this.getWeb3()
    this.setContract()
  },
  mounted() {
    this.checkHouseEdge()
    this.checkCasinoBalance()
    this.getAccount()
  },
  data() {
    return {
      //初始化web3
      web3: undefined,
      isMetamask: false,
      network: '',

      //合约提供的数据
      ABI: null,
      contractAddr: '',
      //实例化合约
      casinoContract: undefined,
      casino: undefined,

      // //钱包信息，可根据需求变动这两的数据，为了方便，这里我把地址写死了
      myAddress: '0x43a0603430c049e862fe4fd0985da9f9d735a138',
      myPrivateKey: '3b7525aeaad45f9eaa26406d0df55f9bd10f49b7ea55b5e1909aad4704f8a799',

      odds: null,

      amount: null,
      pending: false,
      winEvent: null,

      showEnv: false,

      accountBalance: null,
      contractBalance: null,

      chooseNum: null,
      luckyNum: null,

    }
  },
  methods: {
    getWeb3() {

      this.ABI = [{
          "constant": false,
          "inputs": [{
            "name": "_number",
            "type": "uint256"
          }],
          "name": "bet",
          "outputs": [],
          "payable": true,
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "kill",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "anonymous": false,
          "inputs": [{
              "indexed": false,
              "name": "_status",
              "type": "bool"
            },
            {
              "indexed": false,
              "name": "_amount",
              "type": "uint256"
            }
          ],
          "name": "Won",
          "type": "event"
        },
        {
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "fallback"
        },
        {
          "inputs": [{
              "name": "_minBet",
              "type": "uint256"
            },
            {
              "name": "_houseEdge",
              "type": "uint256"
            }
          ],
          "payable": true,
          "stateMutability": "payable",
          "type": "constructor"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "checkContractBalance",
          "outputs": [{
            "name": "",
            "type": "uint256"
          }],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "houseEdge",
          "outputs": [{
            "name": "",
            "type": "uint256"
          }],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        }
      ]

      this.contractAddr = '0x34e97414cD12fE1b3d96B1C9ca6e437aC5FcfdB9' //测试网络上的

      if (typeof web3 !== 'undefined') {
        this.web3 = new Web3(web3.currentProvider);
        this.isMetamask = true
      } else {
        // set the provider you want from Web3.providers
        // 后面涉及到合约event，故不能用Infura
        // this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545")); //本地ganache
        this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545")); //本地同步的测试网络的节点
        this.isMetamask = false
      }
      console.log('Get Web3!')
      this.showNetwork()
    },
    showNetwork() {
      const NETWORKS = {
        '1': 'Main Net',
        '2': 'Deprecated Morden test network',
        '3': 'Ropsten test network',
        '4': 'Rinkeby test network',
        '42': 'Kovan test network',
        '4447': 'Truffle Develop Network',
        '5777': 'Ganache Blockchain'
      }
      var version = this.web3.version.network;
      this.network = NETWORKS[version]
    },
    setContract() {
      this.casinoContract = this.web3.eth.contract(this.ABI);
      this.casino = this.casinoContract.at(this.contractAddr);
      console.log('Set Contract!')
    },

    checkHouseEdge() {

      //不能这样调合约方法，本地的私链会成功，但测试网络失败
      // this.casino.houseEdge();

      // function signature
      var encoded = '0x' + abi.methodID('houseEdge', []).toString('hex')
      //调用合约方法
      this.web3.eth.call({
        to: this.contractAddr,
        data: encoded
      }, (error, result) => {
        if (!error) {
          console.log(result);
          this.odds = parseInt(result, 16);
        } else
          console.error(error);
      });
    },
    clickNumber(event) {
      this.chooseNum = event.target.innerHTML
      let pay = this.amount * (100 - this.odds) / 10
      this.amount <= 0 ? alert('下注太少了，不行啊') : ''
      this.contractBalance < pay ? alert('奖池钱不够啊，赌少一点钱呗') : ''
      if (this.contractBalance > pay && this.amount > 0) {
        this.winEvent = null
        this.pending = true
        if (this.isMetamask) {
          this.casino.bet(event.target.innerHTML, {
            gas: 300000, //Gas Limit
            gasPrice: this.web3.toWei('0.000000001', 'ether'), // 1 Gwei
            value: this.web3.toWei(this.amount, 'ether'),
            from: this.web3.eth.coinbase
          }, (err, result, data) => {
            if (err) {
              this.pending = false
              console.log(err)
            } else {
              console.log('result', result)
              //捕捉 event
              let Won = this.casino.Won()
              Won.watch((err, result) => {
                if (err) {
                  this.pending = false
                  console.error(err)
                } else {
                  this.pending = false
                  console.log(result)
                  let winningNumber = result.blockNumber % 10 + 1 // % 取余数
                  this.luckyNum = winningNumber
                  this.winEvent = result.args
                  this.winEvent._amount = parseInt(result.args._amount, 10) / Math.pow(10, 18);
                  this.checkCasinoBalance()
                  // 停止捕捉
                  Won.stopWatching();
                }
              })
            }
          })
        } else {

          const privateKey = Buffer.from(this.myPrivateKey, 'hex')
          var encoded = '0x' + abi.simpleEncode("bet(uint256)", event.target.innerHTML).toString('hex')

          this.getNonce().then(web3Nonce => {
            // gas,gasPrice,value 单位是wei
            const txParams = {
              nonce: web3Nonce,
              gas: this.web3.fromDecimal('300000'), //十进制数字或者十进制字符串转为十六进制
              gasPrice: this.web3.fromDecimal('1000000'), //0.001 Gwei
              value: this.web3.fromDecimal(this.web3.toWei(this.amount, 'ether')),
              to: this.contractAddr,
              from: this.myAddress,
              data: encoded,
              // EIP 155 chainId - mainnet: 1, ropsten: 3
              chainId: 3
            }
            const tx = new EthereumTx(txParams)
            tx.sign(privateKey)
            const serializedTx = tx.serialize()

            this.web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), (err, result, data) => {
              if (err) {
                this.pending = false
                console.error(err)
              } else {
                console.log('result', result)
                //捕捉 event
                let Won = this.casino.Won()
                Won.watch((err, result) => {
                  console.log('result', result)
                  if (err) {
                    this.pending = false
                    console.error(err)
                  } else {
                    this.pending = false
                    console.log(result)
                    let winningNumber = result.blockNumber % 10 + 1 // % 取余数
                    this.luckyNum = winningNumber
                    this.winEvent = result.args
                    this.winEvent._amount = parseInt(result.args._amount, 10) / Math.pow(10, 18);
                    this.checkCasinoBalance()
                    // 停止捕捉
                    Won.stopWatching();
                  }
                })
              }

            });

          })

        }
      }

    },
    getNonce() {
      return new Promise((resolve, reject) => {
        this.web3.eth.getTransactionCount(this.myAddress, (error, result) => {
          if (!error) {
            let nonce = '0x' + result.toString(16)
            resolve(nonce)
          } else {
            console.error(error);

          }
        })

      })
    },
    checkNetwork() {
      this.showEnv ? this.showEnv = false : this.showEnv = true
    },
    getAccount() {

      if (this.isMetamask) {
        //设置账户
        this.web3.eth.accounts[0] ? this.myAddress = this.web3.eth.accounts[0] : alert('请检查账户是否登录')
      } else {

        this.web3.eth.accounts[0] = this.myAddress

      }

      this.web3.eth.getBalance(this.myAddress, (error, result) => {
        if (!error) {
          console.log(result);
          this.accountBalance = parseInt(result, 10) / Math.pow(10, 18);
        } else {
          console.error(error);
        }
      });

    },
    checkCasinoBalance() {
      this.web3.eth.getBalance(this.contractAddr, (error, result) => {
        if (!error) {
          console.log(result);
          this.contractBalance = parseInt(result, 10) / Math.pow(10, 18);
        } else {
          console.error(error);
        }
      });
    }
  }
}

</script>
<style scoped>
.casino {
  margin-top: 50px;
  text-align: center;
  max-width: 1000px;
}

.networkBtn,
.network {
  position: absolute;
  right: 10px;
}

.network {
  top: 75px;
}

.network p {
  margin: 0;
}

#loader {
  width: 150px;
}

input {
  width: 45px;
}

ul {
  margin: 40px;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 110px;
  grid-row-gap: 35px;
}

li {
  padding: 20px;
  margin-right: 5px;
  border-radius: 50%;
  cursor: pointer;
  background-color: #fff;
  border: -2px solid #bf0d9b;
  color: #bbb6b6;
  /*box-shadow: 3px 5px #bf0d9b;*/
  border: 1px solid #bbb6b6;
}

li:hover {
  background-color: rgb(244, 198, 20);
  color: white;
  box-shadow: 0px 0px rgb(244, 198, 20);
  border: none;
}

li:active {
  opacity: 0.7;
}

* {
  color: #444444;
}

#has-won {
  color: green;
}

#has-lost {
  color: red;
}

</style>
