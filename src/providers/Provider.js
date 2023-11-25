'use client'
import ContextProvider from '@/contexts/context';
import { SessionProvider } from 'next-auth/react';
import React from 'react';
import { Toaster } from 'react-hot-toast';

const Provider = ({ children }) => {
    return (
        <SessionProvider>
            <ContextProvider>
                {children}
                <Toaster />
            </ContextProvider>
        </SessionProvider>
    );
};

export default Provider;