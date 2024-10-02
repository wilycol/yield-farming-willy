import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react'

export function QueryProvider({ children }) {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}
