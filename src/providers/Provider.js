'use client'
import { SessionProvider } from 'next-auth/react';
import React from 'react';
import { Toaster } from 'react-hot-toast';

const Provider = ({ children }) => {
    return (
        <SessionProvider>
            {children}
            <Toaster />
        </SessionProvider>
    );
};

export default Provider;