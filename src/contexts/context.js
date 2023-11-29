import axios from 'axios';
import { useRouter } from 'next/navigation';
import { createContext, useEffect, useState } from 'react';

export const Context = createContext()

import React from 'react';

const ContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [carsData, setCarsData] = useState([]);
    const [userInfo, setUserInfo] = useState([]);

    const router = useRouter();

    const token = localStorage.getItem("Token");
    useEffect(() => {
        if (token) {
            axios
                .post(`/api/user-info`, { token })
                .then((res) => {
                    if (res.data.status == 200) {
                        setUserInfo(res.data.data);
                        setLoading(false);
                    }
                })
                .catch((e) => console.log(e));
        } else {
            setLoading(false);
        }
    }, [token]);

    const logOut = async () => {
        localStorage.removeItem('Token')
        router.refresh()
    }

    const contextInfo = {
        loading,
        setLoading,
        carsData,
        setCarsData,
        userInfo,
        setUserInfo,
        logOut
    }
    return (
        <Context.Provider value={contextInfo}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;