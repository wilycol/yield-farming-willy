import React from 'react'
import { WagmiProvider } from './wagmi/wagmi.provider'
import { QueryProvider } from './query/query.provider'
import { RainbowKitProvider } from './rainbow-kit/rainbow-kit.provider'

function AppProvider({ children }) {
    return (
        <WagmiProvider>
            <QueryProvider>
                <RainbowKitProvider>
                    {children}
                </RainbowKitProvider>
            </QueryProvider>
        </WagmiProvider>
    )
}

export default AppProvider