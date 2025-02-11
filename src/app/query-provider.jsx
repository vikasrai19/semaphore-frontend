'use client';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function QueryProvider({ children }) {
    // Create the client in state to avoid recreating on every render
    const [queryClient] = useState(() => new QueryClient());

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}