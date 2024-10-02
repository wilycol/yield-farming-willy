import React from 'react'
import {
    RainbowKitProvider as RainbowKit,
    darkTheme,
} from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';

export function RainbowKitProvider({ children }) {
    return (
        <RainbowKit theme={darkTheme()}>
            {children}
        </RainbowKit>
    )
}
