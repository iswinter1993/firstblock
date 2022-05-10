// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import './Ownable.sol';
import './Stakeable.sol';
//address(this)是合约的地址，msg.sender是合约调用者的地址。

contract DevToken is Ownable,Stakeable{
  //定义需要的字段
  uint private _totalSupply; //Tokens 总数
  uint8 private _decimals; //Token 的小数精度，默认 18
  string private _symbol;
  string private _name;

  //  设置_allowances 储存管理用户津贴，允许意味着账户 1 可以说“嘿，账户 2 可以从我的账户访问 X 个令牌”。
  mapping(address => mapping(address=>uint256)) private _allowances;

  //定义一个批准事件 允许一个帐户在 Owners 访问 X 代币
  event Approval(address indexed owner, address indexed spender, uint256 value);
  //外部方法getOwner 获取当前合约的owner、
  function getOwner() external view returns(address) {
    return owner();
  }

  //allowance 查看一个用户|能从owner领取多少allowance
  function allowance(address owner, address spender) external view returns(uint256) {
    return _allowances[owner][spender];
  }

  //_approve 用于将新的 Spender 添加到 Owners 帐户,并映射amount
  function _approve(address owner, address spender, uint256 amount) internal  {
    require(owner != address(0), "DevToken: approve cannot be done from zero address");
      require(spender != address(0), "DevToken: approve cannot be to zero address");
      //设置owner授权给spender的金额
      _allowances[owner][spender] = amount;
      emit Approval(owner,spender,amount);
  }

  //msg.sender地址合约调用者 批准并允许 spender 代表他使用 X 数量的代币
  function approve(address spender, uint256 amount) external returns(bool) {
    _approve(msg.sender, spender, amount);
    return true;
  }

  /*transferFrom 用于从账户限额中转移代币
     * Spender 地址应该是代币持有者*/
  function transferFrom(address spender, address recipient, uint256 amount) external returns(bool) {
    //确保spender被批准的amount>=输入的amount
    require(_allowances[spender][msg.sender] >= amount,"DevToken: You cannot spend that much on this account");
    // Transfer first
    _transfer(spender, recipient, amount);
    // Reduce current allowance so a user cannot respend
    _approve(spender,msg.sender,_allowances[spender][msg.sender] - amount);
    return true;
  }

  /**
  @notice increaseAllowance
  从函数调用者地址向帐户添加津贴
  */
  function increaseAllowance(address spender,uint256 amount) public returns(bool) {
    _approve(msg.sender, spender, _allowances[msg.sender][spender] + amount);
    return true;
  } 
  /**
  * @notice decreaseAllowance
  * Decrease 从函数调用者地址向帐户减少津贴
   */
    function decreaseAllowance(address spender, uint256 amount) public returns (bool) {
      _approve(msg.sender, spender, _allowances[msg.sender][spender]-amount);
      return true;
    }



  //定义mapping类型 余额
  mapping(address => uint256) private _balances;
  //定义一个事件
  event Transfer(address indexed from, address indexed to, uint256 value);
  

  // Constructor is a function that will run when the Token is created.
  constructor( string memory token_name, string memory short_symbol, uint8 token_decimals, uint256 token_totalSupply ) {
    _name = token_name;
    _symbol = short_symbol;
    _decimals = token_decimals;
    _totalSupply = token_totalSupply;
    //把token分配给合约创建者
    _balances[msg.sender] = _totalSupply;
    //通知 Transfer 事件已发生
    //address(0) 0x000000000000000
    emit Transfer(address(0),msg.sender,_totalSupply);
  }
  //定义 外部调用方法
  function decimals() external view returns (uint8) {
    return _decimals;
  }
  function symbol() external view returns (string memory){
    return _symbol;
  }
  function name() external view returns (string memory){
    return _name;
  }
  function totalSupply() external view returns (uint256){
    return _totalSupply;
  }
  //返回用户余额
  function balanceOf(address account) external view returns (uint256){
    return _balances[account];
  }
  /*mint 将在输入的地址上创建代币，然后增加总供应量
   *
   * 它还将发出一个 Transfer 事件，发送者设置为零地址 (adress(0))
   *
   * 要求接收令牌的地址不是零地址
   */
   function _mint(address account, uint256 amount) internal {
     require(account != address(0),"DevToken: cannot mint to zero address");
     //增加token总量
     _totalSupply = _totalSupply + (amount);
     //使用余额将金额添加到帐户余额
     _balances[account] = _balances[account] + amount;
     //发出事件
     emit Transfer(address(0), account, amount);
   }
   /**
   burn 将销毁输入地址中的代币，然后减少总供应量
   * 传输事件将在接收器设置为零地址的情况下发出
   *
   * 需要
   * - 帐户不能为零
   * - 账户余额必须大于或等于金额
    */
    function _burn(address account, uint256 amount) internal {
      require(account != address(0), "DevToken: cannot burn from zero address");
      require(_balances[account] >= amount,"DevToken: Cannot burn more than the account owns");
      //从用户余额中减去金额
      _balances[account] = _balances[account] - amount;
      //总量减去金额
      _totalSupply = _totalSupply - amount;
      //发布事件
      emit Transfer(account, address(0), amount);

    }
    
    /**
    内部调用_transfer方法
    *
    ** Events
    * - Transfer
    * 
    * Requires
    *  - Sender cannot be zero
    *  - recipient cannot be zero 
    *  - sender balance most be = or bigger than amount
     */
    function _transfer(address sender, address recipient, uint256 amount) internal {
      require(sender != address(0),'DevToken: transfer from zero address');
      require(recipient != address(0), 'DevToken: transfer to zero address');
      require(_balances[sender] >= amount,'DevToken: cant transfer more than your account holds');
      _balances[sender] = _balances[sender] - amount;
      _balances[recipient] = _balances[recipient] + amount;
      emit Transfer(sender, recipient, amount);
    }
    /*
    为了节省gas 定义transfer外部调用方法，和_transfer内部调用方法
     只能外部调用的transfer方法
     Requires
    * - Caller cannot be zero
    * - Caller must have a balance = or bigger than amount
    */
    function transfer(address recipient, uint256 amount) external returns(bool) {
      _transfer(msg.sender, recipient, amount);
      return true;
    }
    //公共销毁方法burn
    function burn(address account, uint256 amount) public onlyOwner returns(bool) {
      _burn(account, amount);
      return true;
    }
    //公共铸造方法mint
    function mint(address account, uint256 amount) public onlyOwner returns(bool) {
      _mint(account, amount);
      return true;
    }
    //质押方法
    function stake(uint256 _amount) public {
      //确保质押者确实适合它
      require(_amount < _balances[msg.sender],'DevToken: Cannot stake more than you own');

      _stake(_amount);
      // Burn the amount of tokens on the sender
      _burn(msg.sender, _amount);
    }
    //公共调用函数withdrawStake
    //解除质押 取出代币 withdrawStake is used to withdraw stakes from the account holder
    function withdrawStake(uint256 amount, uint256 stake_index) public {
      uint256 amount_to_mint = _withdrawStake(amount, stake_index);
      // Return staked tokens to user
      _mint(msg.sender, amount_to_mint);

    }
    //用户质押的总数
    function hasStake(address _staker) public view returns(StakingSummary memory){
      uint256 totalStakeAmount; 
      //在内存中保留一个summary，因为我们需要计算这个
      StakingSummary memory summary = StakingSummary(0,stakeholders[stakes[_staker]].address_stakes);
      //获取所有质押的总量
      for(uint256 i=0; i<summary.stakes.length;i++){
        uint256 availableReward = calculateStakeReward(summary.stakes[i]);
        summary.stakes[i].claimable = availableReward;
        totalStakeAmount = totalStakeAmount + summary.stakes[i].amount;
      }
      //将计算金额分配给summary
      summary.total_amount = totalStakeAmount;
      return summary;
    }
    
}