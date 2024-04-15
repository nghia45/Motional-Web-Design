// SPDX-License-Identifier: UNLICENSED 
pragma solidity ^0.8.19;
contract Message {
    struct Memo{
        string name;
        string message;
        uint timestamp;
        address from;
    }
    event MemoAdded(string name, string message, uint timestamp, address from);

    Memo[] memos;
    address payable owner;

    constructor() {
        owner = payable(msg.sender);
    }

    function addMemo(string memory _name, string memory _message) public {
        memos.push(Memo(_name, _message, block.timestamp, msg.sender));
        emit MemoAdded(_name, _message, block.timestamp, msg.sender);
    }

    function getMemo(uint _index) public view returns(string memory, string memory, uint, address) {
        Memo memory memo = memos[_index];
        return (memo.name, memo.message, memo.timestamp, memo.from);
    }

    function getAllMemos() public view returns(Memo[] memory) {
        return memos;
    }
}