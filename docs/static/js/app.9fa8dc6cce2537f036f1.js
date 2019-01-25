webpackJsonp([1],{0:function(e,t){},1:function(e,t){},2:function(e,t){},3:function(e,t){},EEbw:function(e,t){e.exports={version:"0.14.0"}},HTE9:function(e,t){e.exports={genesisGasLimit:{v:5e3,d:"Gas limit of the Genesis block."},genesisDifficulty:{v:17179869184,d:"Difficulty of the Genesis block."},genesisNonce:{v:"0x0000000000000042",d:"the geneis nonce"},genesisExtraData:{v:"0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa",d:"extra data "},genesisHash:{v:"0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3",d:"genesis hash"},genesisStateRoot:{v:"0xd7f8974fb5ac78d9ac099b9ad5018bedc2ce0a72dad1827a1709da30580f0544",d:"the genesis state root"},minGasLimit:{v:5e3,d:"Minimum the gas limit may ever be."},gasLimitBoundDivisor:{v:1024,d:"The bound divisor of the gas limit, used in update calculations."},minimumDifficulty:{v:131072,d:"The minimum that the difficulty may ever be."},difficultyBoundDivisor:{v:2048,d:"The bound divisor of the difficulty, used in the update calculations."},durationLimit:{v:13,d:"The decision boundary on the blocktime duration used to determine whether difficulty should go up or not."},maximumExtraDataSize:{v:32,d:"Maximum size extra data may be after Genesis."},epochDuration:{v:3e4,d:"Duration between proof-of-work epochs."},stackLimit:{v:1024,d:"Maximum size of VM stack allowed."},callCreateDepth:{v:1024,d:"Maximum depth of call/create stack."},tierStepGas:{v:[0,2,3,5,8,10,20],d:"Once per operation, for a selection of them."},expGas:{v:10,d:"Once per EXP instuction."},expByteGas:{v:10,d:"Times ceil(log256(exponent)) for the EXP instruction."},sha3Gas:{v:30,d:"Once per SHA3 operation."},sha3WordGas:{v:6,d:"Once per word of the SHA3 operation's data."},sloadGas:{v:50,d:"Once per SLOAD operation."},sstoreSetGas:{v:2e4,d:"Once per SSTORE operation if the zeroness changes from zero."},sstoreResetGas:{v:5e3,d:"Once per SSTORE operation if the zeroness does not change from zero."},sstoreRefundGas:{v:15e3,d:"Once per SSTORE operation if the zeroness changes to zero."},jumpdestGas:{v:1,d:"Refunded gas, once per SSTORE operation if the zeroness changes to zero."},logGas:{v:375,d:"Per LOG* operation."},logDataGas:{v:8,d:"Per byte in a LOG* operation's data."},logTopicGas:{v:375,d:"Multiplied by the * of the LOG*, per LOG transaction. e.g. LOG0 incurs 0 * c_txLogTopicGas, LOG4 incurs 4 * c_txLogTopicGas."},createGas:{v:32e3,d:"Once per CREATE operation & contract-creation transaction."},callGas:{v:40,d:"Once per CALL operation & message call transaction."},callStipend:{v:2300,d:"Free gas given at beginning of call."},callValueTransferGas:{v:9e3,d:"Paid for CALL when the value transfor is non-zero."},callNewAccountGas:{v:25e3,d:"Paid for CALL when the destination address didn't exist prior."},suicideRefundGas:{v:24e3,d:"Refunded following a suicide operation."},memoryGas:{v:3,d:"Times the address of the (highest referenced byte in memory + 1). NOTE: referencing happens on read, write and in instructions such as RETURN and CALL."},quadCoeffDiv:{v:512,d:"Divisor for the quadratic particle of the memory cost equation."},createDataGas:{v:200,d:""},txGas:{v:21e3,d:"Per transaction. NOTE: Not payable on data of calls between transactions."},txCreation:{v:32e3,d:"the cost of creating a contract via tx"},txDataZeroGas:{v:4,d:"Per byte of data attached to a transaction that equals zero. NOTE: Not payable on data of calls between transactions."},txDataNonZeroGas:{v:68,d:"Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions."},copyGas:{v:3,d:"Multiplied by the number of 32-byte words that are copied (round up) for any *COPY operation and added."},ecrecoverGas:{v:3e3,d:""},sha256Gas:{v:60,d:""},sha256WordGas:{v:12,d:""},ripemd160Gas:{v:600,d:""},ripemd160WordGas:{v:120,d:""},identityGas:{v:15,d:""},identityWordGas:{v:3,d:""},minerReward:{v:"5000000000000000000",d:"the amount a miner get rewarded for mining a block"},ommerReward:{v:"625000000000000000",d:"The amount of wei a miner of an uncle block gets for being inculded in the blockchain"},niblingReward:{v:"156250000000000000",d:"the amount a miner gets for inculding a uncle"},homeSteadForkNumber:{v:115e4,d:"the block that the Homestead fork started at"},homesteadRepriceForkNumber:{v:2463e3,d:"the block that the Homestead Reprice (EIP150) fork started at"},timebombPeriod:{v:1e5,d:"Exponential difficulty timebomb period"},freeBlockPeriod:{v:2}}},JTTb:function(e,t){},KYqO:function(e,t){e.exports={_args:[["elliptic@6.4.0","/Users/linktime/June/code/vue-dapp-demo"]],_from:"elliptic@6.4.0",_id:"elliptic@6.4.0",_inBundle:!1,_integrity:"sha1-ysmvh2LIWDYYcAPI3+GT5eLq5d8=",_location:"/elliptic",_phantomChildren:{},_requested:{type:"version",registry:!0,raw:"elliptic@6.4.0",name:"elliptic",escapedName:"elliptic",rawSpec:"6.4.0",saveSpec:null,fetchSpec:"6.4.0"},_requiredBy:["/browserify-sign","/create-ecdh","/secp256k1"],_resolved:"https://registry.npmjs.org/elliptic/-/elliptic-6.4.0.tgz",_spec:"6.4.0",_where:"/Users/linktime/June/code/vue-dapp-demo",author:{name:"Fedor Indutny",email:"fedor@indutny.com"},bugs:{url:"https://github.com/indutny/elliptic/issues"},dependencies:{"bn.js":"^4.4.0",brorand:"^1.0.1","hash.js":"^1.0.0","hmac-drbg":"^1.0.0",inherits:"^2.0.1","minimalistic-assert":"^1.0.0","minimalistic-crypto-utils":"^1.0.0"},description:"EC cryptography",devDependencies:{brfs:"^1.4.3",coveralls:"^2.11.3",grunt:"^0.4.5","grunt-browserify":"^5.0.0","grunt-cli":"^1.2.0","grunt-contrib-connect":"^1.0.0","grunt-contrib-copy":"^1.0.0","grunt-contrib-uglify":"^1.0.1","grunt-mocha-istanbul":"^3.0.1","grunt-saucelabs":"^8.6.2",istanbul:"^0.4.2",jscs:"^2.9.0",jshint:"^2.6.0",mocha:"^2.1.0"},files:["lib"],homepage:"https://github.com/indutny/elliptic",keywords:["EC","Elliptic","curve","Cryptography"],license:"MIT",main:"lib/elliptic.js",name:"elliptic",repository:{type:"git",url:"git+ssh://git@github.com/indutny/elliptic.git"},scripts:{jscs:"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",jshint:"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",lint:"npm run jscs && npm run jshint",test:"npm run lint && npm run unit",unit:"istanbul test _mocha --reporter=spec test/index.js",version:"grunt dist && git add dist/"},version:"6.4.0"}},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]},i=n("VU/8")({name:"App"},s,!1,null,null,null).exports,o=n("/ocq"),r=n("//Fk"),c=n.n(r),u=n("8k0n"),d=n.n(u),p=n("qFzt"),l=n.n(p),m=(n("/jGa"),n("uotZ")),y=function(e){return(t=e=e||0)instanceof m.BigNumber||t&&t.constructor&&"BigNumber"===t.constructor.name?e:!function(e){return"string"==typeof e||e&&e.constructor&&"String"===e.constructor.name}(e)||0!==e.indexOf("0x")&&0!==e.indexOf("-0x")?new m.BigNumber(e.toString(10),10):new m.BigNumber(e.replace("0x",""),16);var t};function h(e){return y(e).toNumber()}var b=[{constant:!1,inputs:[{name:"_number",type:"uint256"}],name:"bet",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[],name:"kill",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!1,name:"_status",type:"bool"},{indexed:!1,name:"_amount",type:"uint256"}],name:"Won",type:"event"},{payable:!1,stateMutability:"nonpayable",type:"fallback"},{inputs:[{name:"_minBet",type:"uint256"},{name:"_houseEdge",type:"uint256"}],payable:!0,stateMutability:"payable",type:"constructor"},{constant:!0,inputs:[],name:"checkContractBalance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"houseEdge",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}],f={created:function(){this.getWeb3(),this.setContract()},mounted:function(){this.$nextTick(function(){var e=this;this.checkHouseEdge(),this.checkCasinoBalance();setInterval(function(){e.getAccount()},1e3)})},data:function(){return{web3:void 0,isMetamask:!1,network:"",ABI:null,contractAddr:"",casinoContract:void 0,casino:void 0,myAddress:"",myPrivateKey:"",odds:null,amount:null,pending:!1,winEvent:null,showEnv:!1,accountBalance:null,contractBalance:0,chooseNum:null,luckyNum:null,Numbers:[1,2,3,4,5,6,7,8,9,10]}},methods:{getWeb3:function(){if(this.ABI=b,this.contractAddr="0x34e97414cD12fE1b3d96B1C9ca6e437aC5FcfdB9",window.ethereum){window.web3=new d.a(ethereum);try{ethereum.enable(),this.isMetamask=!0}catch(e){this.isMetamask=!1}}else window.web3?(window.web3=new d.a(web3.currentProvider),this.isMetamask=!0):(console.log("Non-Ethereum browser detected. You should consider trying MetaMask!"),this.isMetamask=!1);console.log("Get Web3!"),this.showNetwork()},showNetwork:function(){var e=window.web3.version.network;this.network={1:"Main Net",2:"Deprecated Morden test network",3:"Ropsten test network",4:"Rinkeby test network",42:"Kovan test network",4447:"Truffle Develop Network",5777:"Ganache Blockchain"}[e]},setContract:function(){this.casinoContract=window.web3.eth.contract(this.ABI),this.casino=this.casinoContract.at(this.contractAddr),console.log("Set Contract!")},checkHouseEdge:function(){var e=this,t="0x"+l.a.methodID("houseEdge",[]).toString("hex");window.web3.eth.call({to:this.contractAddr,data:t},function(t,n){t?console.error(t):e.odds=parseInt(n,16)})},clickNumber:function(e,t){var n=this;this.chooseNum=e;var a=this.amount*(100-this.odds)/10;this.amount<=0&&alert("No way! There are too few bets."),this.contractBalance<a&&alert("The prize pool is not enough, please reduce the bet."),this.contractBalance>a&&this.amount>0&&(this.winEvent=null,this.pending=!0,this.isMetamask?this.casino.bet(e,{gas:3e5,gasPrice:window.web3.toWei("0.000000001","ether"),value:window.web3.toWei(this.amount,"ether"),from:window.web3.eth.coinbase},function(e,t,a){if(e)n.pending=!1,console.log(e);else{var s=n.casino.Won();s.watch(function(e,t){if(e)n.pending=!1,console.error(e);else{n.pending=!1;var a=t.blockNumber%10+1;n.luckyNum=a,n.winEvent=t.args,n.winEvent._amount=parseInt(t.args._amount,10)/Math.pow(10,18),n.checkCasinoBalance(),s.stopWatching()}})}}):alert("Please log in to Metamask"))},getNonce:function(){var e=this;return new c.a(function(t,n){window.web3.eth.getTransactionCount(e.myAddress,function(e,n){if(e)console.error(e);else{var a="0x"+n.toString(16);t(a)}})})},checkNetwork:function(){this.showEnv?this.showEnv=!1:this.showEnv=!0},getAccount:function(){var e=this;this.isMetamask?window.web3.eth.accounts[0]?this.myAddress=window.web3.eth.accounts[0]:alert("Please log in to Metamask"):window.web3.eth.accounts[0]=this.myAddress,window.web3.eth.getBalance(this.myAddress,function(t,n){t?console.error(t):e.accountBalance=h(n)/Math.pow(10,18)})},checkCasinoBalance:function(){var e=this;window.web3.eth.getBalance(this.contractAddr,function(t,n){t?console.error(t):e.contractBalance=h(n)/Math.pow(10,18)})}}},_={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"casino"},[n("h1",[e._v("Welcome to the Casino")]),e._v(" "),n("p",[e._v("Prize pool："+e._s(e.contractBalance)+" ETH")]),e._v("\n  Bet:\n  "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.amount,expression:"amount"}],attrs:{placeholder:"0"},domProps:{value:e.amount},on:{input:function(t){t.target.composing||(e.amount=t.target.value)}}}),e._v("Ether\n  "),n("h4",[e._v("Guess（1～10）")]),e._v(" "),n("ul",{staticClass:"block-number"},e._l(e.Numbers,function(t){return n("li",{on:{click:function(n){e.clickNumber(t)}}},[e._v(e._s(t))])})),e._v(" "),e.pending?n("img",{staticClass:"loader",attrs:{src:"https://loading.io/spinners/double-ring/lg.double-ring-spinner.gif"}}):e._e(),e._v(" "),n("p",{staticClass:"address"},[e._v("Address："+e._s(e.myAddress))]),e._v(" "),n("p",[e._v("Balance："+e._s(e.accountBalance)+" ETH")]),e._v(" "),e.winEvent?n("div",{staticClass:"event"},[n("p",[e._v("The number you guess is："+e._s(e.chooseNum))]),e._v(" "),n("p",[e._v("Lucky number is "+e._s(e.luckyNum))]),e._v(" "),e.winEvent._status?n("p",{staticClass:"green"},[e._v("\n      Excellent!!! Get "+e._s(e.winEvent._amount)+" ETH\n    ")]):n("p",{staticClass:"red"},[e._v("\n      OH NO ~ Try again\n    ")])]):e._e()])},staticRenderFns:[]};var v=n("VU/8")(f,_,!1,function(e){n("JTTb")},"data-v-4c98f60b",null).exports;a.a.use(o.a);var g=new o.a({mode:"history",base:"vue-dapp-demo/",routes:[{path:"/",name:"casino-dapp",component:v}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:g,components:{App:i},template:"<App/>"})},"R/pS":function(e,t){e.exports=[{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"name",outputs:[{name:"o_name",type:"bytes32"}],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"owner",outputs:[{name:"",type:"address"}],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"content",outputs:[{name:"",type:"bytes32"}],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"addr",outputs:[{name:"",type:"address"}],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"}],name:"reserve",outputs:[],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"subRegistrar",outputs:[{name:"",type:"address"}],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_newOwner",type:"address"}],name:"transfer",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_registrar",type:"address"}],name:"setSubRegistrar",outputs:[],type:"function"},{constant:!1,inputs:[],name:"Registrar",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_a",type:"address"},{name:"_primary",type:"bool"}],name:"setAddress",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_content",type:"bytes32"}],name:"setContent",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"}],name:"disown",outputs:[],type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"_name",type:"bytes32"},{indexed:!1,name:"_winner",type:"address"}],name:"AuctionEnded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_name",type:"bytes32"},{indexed:!1,name:"_bidder",type:"address"},{indexed:!1,name:"_value",type:"uint256"}],name:"NewBid",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"name",type:"bytes32"}],name:"Changed",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"name",type:"bytes32"},{indexed:!0,name:"addr",type:"address"}],name:"PrimaryChanged",type:"event"}]},UIsv:function(e,t){e.exports=[{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"owner",outputs:[{name:"",type:"address"}],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_refund",type:"address"}],name:"disown",outputs:[],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"addr",outputs:[{name:"",type:"address"}],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"}],name:"reserve",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_newOwner",type:"address"}],name:"transfer",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_a",type:"address"}],name:"setAddr",outputs:[],type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"name",type:"bytes32"}],name:"Changed",type:"event"}]},o13F:function(e,t){e.exports={COMPRESSED_TYPE_INVALID:"compressed should be a boolean",EC_PRIVATE_KEY_TYPE_INVALID:"private key should be a Buffer",EC_PRIVATE_KEY_LENGTH_INVALID:"private key length is invalid",EC_PRIVATE_KEY_RANGE_INVALID:"private key range is invalid",EC_PRIVATE_KEY_TWEAK_ADD_FAIL:"tweak out of range or resulting private key is invalid",EC_PRIVATE_KEY_TWEAK_MUL_FAIL:"tweak out of range",EC_PRIVATE_KEY_EXPORT_DER_FAIL:"couldn't export to DER format",EC_PRIVATE_KEY_IMPORT_DER_FAIL:"couldn't import from DER format",EC_PUBLIC_KEYS_TYPE_INVALID:"public keys should be an Array",EC_PUBLIC_KEYS_LENGTH_INVALID:"public keys Array should have at least 1 element",EC_PUBLIC_KEY_TYPE_INVALID:"public key should be a Buffer",EC_PUBLIC_KEY_LENGTH_INVALID:"public key length is invalid",EC_PUBLIC_KEY_PARSE_FAIL:"the public key could not be parsed or is invalid",EC_PUBLIC_KEY_CREATE_FAIL:"private was invalid, try again",EC_PUBLIC_KEY_TWEAK_ADD_FAIL:"tweak out of range or resulting public key is invalid",EC_PUBLIC_KEY_TWEAK_MUL_FAIL:"tweak out of range",EC_PUBLIC_KEY_COMBINE_FAIL:"the sum of the public keys is not valid",ECDH_FAIL:"scalar was invalid (zero or overflow)",ECDSA_SIGNATURE_TYPE_INVALID:"signature should be a Buffer",ECDSA_SIGNATURE_LENGTH_INVALID:"signature length is invalid",ECDSA_SIGNATURE_PARSE_FAIL:"couldn't parse signature",ECDSA_SIGNATURE_PARSE_DER_FAIL:"couldn't parse DER signature",ECDSA_SIGNATURE_SERIALIZE_DER_FAIL:"couldn't serialize signature to DER format",ECDSA_SIGN_FAIL:"nonce generation function failed or private key is invalid",ECDSA_RECOVER_FAIL:"couldn't recover public key from signature",MSG32_TYPE_INVALID:"message should be a Buffer",MSG32_LENGTH_INVALID:"message length is invalid",OPTIONS_TYPE_INVALID:"options should be an Object",OPTIONS_DATA_TYPE_INVALID:"options.data should be a Buffer",OPTIONS_DATA_LENGTH_INVALID:"options.data length is invalid",OPTIONS_NONCEFN_TYPE_INVALID:"options.noncefn should be a Function",RECOVERY_ID_TYPE_INVALID:"recovery should be a Number",RECOVERY_ID_VALUE_INVALID:"recovery should have value between -1 and 4",TWEAK_TYPE_INVALID:"tweak should be a Buffer",TWEAK_LENGTH_INVALID:"tweak length is invalid"}},oPsS:function(e,t){e.exports=[{constant:!1,inputs:[{name:"from",type:"bytes32"},{name:"to",type:"address"},{name:"value",type:"uint256"}],name:"transfer",outputs:[],type:"function"},{constant:!1,inputs:[{name:"from",type:"bytes32"},{name:"to",type:"address"},{name:"indirectId",type:"bytes32"},{name:"value",type:"uint256"}],name:"icapTransfer",outputs:[],type:"function"},{constant:!1,inputs:[{name:"to",type:"bytes32"}],name:"deposit",outputs:[],type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"AnonymousDeposit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"bytes32"},{indexed:!1,name:"value",type:"uint256"}],name:"Deposit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"bytes32"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"bytes32"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"indirectId",type:"bytes32"},{indexed:!1,name:"value",type:"uint256"}],name:"IcapTransfer",type:"event"}]}},["NHnr"]);
//# sourceMappingURL=app.9fa8dc6cce2537f036f1.js.map