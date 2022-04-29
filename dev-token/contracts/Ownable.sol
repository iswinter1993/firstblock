// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
contract Ownable {
    //定义私有变量_owner
    address private _owner ;
    //事件 OwnershipTransferred 用于记录令牌的所有权更改已发生
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    //创建修饰符onlyOwner
    modifier onlyOwner() {
        require(_owner == msg.sender,"Ownable: only owner can call this function");
        _;
    }

    constructor(){
        _owner = msg.sender;
        emit OwnershipTransferred(address(0), _owner);
    }
    //owner() 返回当前分配的 Token 所有者
    function owner() public view returns(address) {
        return _owner;
    }
    /*
    renounceOwnership 将所有者设置为零地址
     * 这将使合约所有者更少，它将使所有功能与
     * onlyOwner 不再可调用。
     * 无法恢复拥有者
    */
    function renounceOwnership() public onlyOwner {
        emit OwnershipTransferred(_owner, address(0));
        _owner = address(0);
    }
    /*
    _transferOwnership 将分配 {newOwner} 作为所有者
    */
    function _transferOwnership(address newOwner) internal  {
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        emit OwnershipTransferred(_owner, newOwner);
        _owner = newOwner;
    }
    /*
    公共方法transferOwnership 将分配 {newOwner} 作为所有者
    */
    function transferOwnership(address newOwner) public onlyOwner{
        _transferOwnership(newOwner);
        
    }
}