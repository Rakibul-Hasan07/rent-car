'use client'
import { deleteAuthCookie, deleteCookie, getCookie } from '@/utils/cookies';
import axios from 'axios';
import { useRouter } from 'next/navigation'
import { signOut } from "next-auth/react"
import React, { createContext, useEffect, useState } from 'react';

export const Context = createContext()


const ContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [carsData, setCarsData] = useState([]);
    const [userInfo, setUserInfo] = useState([]);
    const [wishList, setWishList] = useState([])

    const router = useRouter()


    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const authToken = await getCookie('authToken');
                console.log(authToken);
                if (authToken) {
                    axios
                        .post(`/api/user-info`, { authToken })
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
            } catch (error) {

            }
        }
        fetchData();
    }, []);

    const logOut = async () => {
        setLoading(true)
        deleteCookie('authToken')
        deleteAuthCookie('nextAuthToken')
        signOut();
        setUserInfo('')
        router.push('/auth/login')
        setLoading(false)
    }

    // wishlist data fetching
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await axios.get(`/api/car/wish-list?email=${userInfo?.email}`);
                console.log(response.data)
                setWishList(response?.data?.data)
                setLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [userInfo?.email, setLoading]);


    const contextInfo = {
        loading,
        setLoading,
        carsData,
        setCarsData,
        userInfo,
        setUserInfo,
        logOut,
        wishList,
        setWishList
    }
    return (
        <Context.Provider value={contextInfo}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;