import { createContext, useState } from 'react';

export const Context = createContext()

import React from 'react';

const ContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [carsData, setCarsData] = useState([]);
    const [userInfo, setUserInfo] = useState([]);

    const contextInfo = {
        loading,
        setLoading,
        carsData,
        setCarsData,
        userInfo,
        setUserInfo
    }
    return (
        <Context.Provider value={contextInfo}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;