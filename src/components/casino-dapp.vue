<template>
  <div class="casino">
    <!-- 检查当前网络的按钮 -->
    <!-- <button @click="checkNetwork" class="networkBtn">Network</button>
    <div v-if="showEnv" class="network">
      <p>Welcome to the <span v-if="isMetamask">Metamask</span></p>
      <p>{{network}}</p>
    </div> -->
    <!-- 标题   -->
    <h1>Welcome to the Casino</h1>
    <!-- <p>TX: {{tx}}</p> -->
    <p>Prize pool：{{contractBalance}} ETH</p>
    Bet:
    <input v-model="amount" placeholder="0">Ether
    <h4>Guess（1～10）</h4>
    <p>You can get a 1-to-1 odds on the winning bet </p>
    <br>
    <!-- 猜数字 -->
    <ul class="block-number">
      <li v-for="item in Numbers" @click="clickNumber(item)">{{item}}</li>
    </ul>
    <!-- loding图 -->
    <img v-if="pending" class="loader" src="https://loading.io/spinners/double-ring/lg.double-ring-spinner.gif" />
    <!-- 用户信息 -->
    <p class="address">Address：{{myAddress}}</p>
    <p>Balance：{{accountBalance}} ETH</p>
    <p v-if="isChooseNum">The number you guess is：{{chooseNum}}</p>
    <div class="event" v-if="winEvent">
      <p>Lucky number is {{luckyNum}}</p>
      <p v-if="winEvent._status" class="green">
        Excellent!!! Get {{winEvent._amount}} ETH
      </p>
      <p v-else class="red">
        OH NO ~ Try again
      </p>
    </div>
  </div>
</template>
<script>
import Web3 from 'web3'
import abi from 'ethereumjs-abi'
import EthereumTx from 'ethereumjs-tx'
import { toNum } from '../util'
import { ABI, contractAddr } from '../contract/info'

export default {
  created() {
    this.getWeb3()
    this.setContract()
  },
  mounted() {
    this.$nextTick(function() {
      this.checkHouseEdge()
      this.checkCasinoBalance()
      let time = setInterval(() => {
        // if (this.flag === true) { clearInterval(time) }
        this.getAccount()
      }, 1000)
    })


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

      myAddress: '',
      myPrivateKey: '',

      odds: null,

      amount: 0.001,
      pending: false,
      winEvent: null,

      showEnv: false,

      accountBalance: null,
      contractBalance: 0,

      chooseNum: null,
      isChooseNum: false,
      luckyNum: null,

      Numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      tx: null,

    }
  },
  methods: {
    getWeb3() {

      this.ABI = ABI

      this.contractAddr = contractAddr

      // Modern dapp browsers...
      if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
          // Request account access if needed
          ethereum.enable();
          // Acccounts now exposed
          this.isMetamask = true

        } catch (error) {
          // User denied account access...
          this.isMetamask = false
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // Acccounts always exposed
        this.isMetamask = true
      }
      // Non-dapp browsers...
      else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
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
      var version = window.web3.version.network;
      this.network = NETWORKS[version]
    },
    setContract() {
      this.casinoContract = window.web3.eth.contract(this.ABI);
      this.casino = this.casinoContract.at(this.contractAddr);
      console.log('Set Contract!')
    },

    checkHouseEdge() {

      //不能这样调合约方法，本地的私链会成功，但测试网络失败
      // this.casino.houseEdge();

      // function signature
      var encoded = '0x' + abi.methodID('houseEdge', []).toString('hex')
      //调用合约方法
      window.web3.eth.call({
        to: this.contractAddr,
        data: encoded
      }, (error, result) => {
        if (!error) {
          this.odds = parseInt(result, 16);
        } else
          console.error(error);
      });
    },
    clickNumber(number, event) {
      this.chooseNum = number
      this.isChooseNum = true
      let pay = this.amount * this.odds
      this.amount <= 0 ? alert('No way! There are too few bets.') : ''
      this.contractBalance <= pay ? alert('The prize pool is not enough, please reduce the bet.') : ''
      if (this.contractBalance > pay && this.amount > 0) {
        this.winEvent = null
        this.pending = true
        if (this.isMetamask) {
          this.casino.bet(number, {
            gas: 300000, //Gas Limit 300000
            gasPrice: window.web3.toWei('0.000000001', 'ether'), // 1 Gwei
            value: window.web3.toWei(this.amount, 'ether'),
            from: window.web3.eth.coinbase
          }, (err, result, data) => {
            if (err) {
              this.pending = false
              console.error(err)
            } else {
              this.tx = result
              //捕捉 event
              let Won = this.casino.Won()
              Won.watch((err, result) => {
                if (err) {
                  this.pending = false
                  console.error(err)
                } else {
                  this.pending = false
                  this.amount = 0
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
          alert('Please log in to Metamask')
        }
      }

    },
    getNonce() {
      return new Promise((resolve, reject) => {
        window.web3.eth.getTransactionCount(this.myAddress, (error, result) => {
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
        window.web3.eth.accounts[0] ? this.myAddress = window.web3.eth.accounts[0] : alert('Please log in to Metamask')
      } else {

        window.web3.eth.accounts[0] = this.myAddress

      }

      window.web3.eth.getBalance(this.myAddress, (error, result) => {
        if (!error) {
          this.accountBalance = toNum(result) / Math.pow(10, 18);
        } else {
          console.error(error);
        }
      });

    },
    checkCasinoBalance() {
      window.web3.eth.getBalance(this.contractAddr, (error, result) => {
        if (!error) {
          this.contractBalance = toNum(result) / Math.pow(10, 18);
        } else {
          console.error(error);
        }
      });
    }
  }
}

</script>
<style scoped>
body {
  color: #444;
}

input {
  width: 45px;
}

ul {
  padding: 0;

  list-style-type: none;
}

.block-number {
  display: flex;

  margin: 0 auto;

  justify-content: center;
  flex-wrap: wrap;
}

.block-number li {
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 20px;

  cursor: pointer;

  color: #bbb6b6;
  border: 1px solid #bbb6b6;
  border-radius: 50%;
  background-color: #fff;

  width: 6%;

  text-align: center;
}

.block-number li:hover {
  color: white;
  border: 1px solid rgb(244, 198, 20);
  background-color: rgb(244, 198, 20);
  box-shadow: 0 0 rgb(244, 198, 20);
}

.block-number li:active {
  opacity: .7;
}

.casino {
  margin: 0 auto;
  max-width: 1000px;
  margin-top: 50px;

  text-align: center;
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

.loader {
  width: 150px;
}

.address {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.green {
  color: green;
}

.red {
  color: red;
}

</style>
