import React from 'react'
import styles from './header.module.css'
import { ConnectButton } from '@rainbow-me/rainbowkit';

export function Header({
  connectWallet,
}) {
  return (
    <header className={styles.header}>
      <div>
        <img
          src='assets/icon.png'
          alt="logo" className={styles.icon}
        />
      </div>
      <div>
        {/* <button onClick={connectWallet}>Connect Wallet</button> */}
        <ConnectButton />
      </div>
    </header>
  )
}
