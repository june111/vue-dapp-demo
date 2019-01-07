pragma solidity ^0.4.21;

contract Ownable {
  address owner;
  constructor () public {
    owner = msg.sender;
  }

  modifier Owned {
    require(msg.sender == owner);
    _;
  }
}

contract Mortal is Ownable {
  function kill() public Owned {
    selfdestruct(owner);
  }
}

contract Casino is Mortal{
  uint minBet;
  uint public houseEdge; //in %

  event Won(bool _status, uint _amount);

  constructor (uint _minBet, uint _houseEdge) payable public {
    require(_minBet > 0);
    require(_houseEdge <= 100);
    minBet = _minBet;
    houseEdge = _houseEdge;
  }
  
  function() public { //fallback
    revert();
  }

  function bet(uint _number) payable public {
    require(_number > 0 && _number <= 10);
    require(msg.value >= minBet);
    uint winningNumber = block.number % 10 + 1;
    if (_number == winningNumber) {
      uint amountWon = msg.value * (100 - houseEdge)/10;
      if(!msg.sender.send(amountWon)) revert();
      emit Won(true, amountWon);
    } else {
      emit Won(false, 0);
    }
  }
  
  function checkContractBalance() Owned public view returns(uint) {
      address _contract = this;
      return _contract.balance;
  }
}