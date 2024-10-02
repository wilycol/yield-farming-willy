import React from 'react';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
    bsc,
    bscTestnet,
} from 'wagmi/chains';
import { WagmiProvider as Wagmi } from 'wagmi';

export function WagmiProvider({ children }) {
    const config = getDefaultConfig({
        appName: 'token-staking-dapp',
        projectId: 'YOUR_PROJECT_ID',
        chains: [bsc, bscTestnet],
        ssr: false,
    });

    return (
        <Wagmi config={config}>{children}</Wagmi>
    )
}
