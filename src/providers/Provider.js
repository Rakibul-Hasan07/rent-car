'use client'
import ContextProvider from '@/contexts/context';
import React from 'react';
import { Toaster } from 'react-hot-toast';

const Provider = ({ children }) => {
    return (
        <ContextProvider>
            {children}
            <Toaster />
        </ContextProvider>
    );
};

export default Provider;