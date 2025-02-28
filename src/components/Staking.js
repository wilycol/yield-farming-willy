import React, { useState } from 'react';
import classes from './Staking.module.css';
import { useAccount } from 'wagmi';

const Staking = (props) => {
  const { address } = useAccount()
  const [inputValue, setInputValue] = useState('');

  const inputChangeHandler = (event) => {
    event.preventDefault();
    setInputValue(event.target.value);
    props.inputHandler(event.target.value);
  };

  const goMax = () => {
    setInputValue(props.userBalance);
    props.inputHandler(props.userBalance);
  };

  return (
    <div className={classes.Staking}>
      <img
        src='assets/icon.png'
        alt="logo" className={classes.icon} />
      <h1> Yield Farming / Token Staking dApp</h1>
      <p>{address ? `${address}` : 'Connect your wallet to get started'}</p>
      <h3>
        {props.apy}% (APY) - {props.apy / 365}% Daily Earnings
      </h3>
      <div className={classes.inputDiv}>
        <input
          className={classes.input}
          type="number"
          min="0"
          step="1"
          onChange={inputChangeHandler}
          value={inputValue}
        ></input>
      </div>
      <button
        className={classes.stakeButton}
        onClick={() => {
          props.stakeHandler();
          setInputValue('');
        }}
      >
        <img src='assets/stake.png' alt="stake icon" className={classes.stakeIcon} />
        <p>Stake</p>
      </button>
      &nbsp; &nbsp;
      <button className={classes.unstakeButton} onClick={props.unStakeHandler}>
        <img
          src='assets/unstake.png'
          alt="unstake icon"
          className={classes.stakeIcon}
        />
        <p>Unstake All</p>
      </button>
      <div className={classes.totals}>
        <h4>
          Total Staked (by all users): {props.totalStaked} TestToken (Tst)
        </h4>
        <div>&nbsp;</div>
        <h5>My Stake: {props.myStake} TestToken (Tst) </h5>
        <h5>
          My Estimated Reward:{' '}
          {((props.myStake * props.apy) / 36500).toFixed(3)} TestToken (Tst)
        </h5>
        <h5 onClick={goMax} className={classes.goMax}>
          My balance: {props.userBalance} TestToken (Tst)
        </h5>
      </div>
    </div>
  );
};
//My balance: 504304.394968082 TestToken (Tst)
export default Staking;
