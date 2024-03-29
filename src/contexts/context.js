'use client'
import { deleteCookie, getCookie } from '@/utils/cookies';
import axios from 'axios';
import { useRouter } from 'next/navigation'
import React, { createContext, useEffect, useState } from 'react';

export const Context = createContext()


const ContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [isLogin, setIsLogin] = useState(false);
    const [carsData, setCarsData] = useState([]);
    const [userInfo, setUserInfo] = useState([]);
    const [wishList, setWishList] = useState([])
    const [searchResult, setSearchResult] = useState([])
    const [refreshPage, setRefreshPage] = useState(false)

    const router = useRouter()


    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const authToken = await getCookie('authToken');
                if (authToken || isLogin) {
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
    }, [isLogin]);

    const logOut = async () => {
        setLoading(true)
        deleteCookie('authToken')
        setUserInfo('')
        router.push('/auth/login')
        setIsLogin(false)
        setLoading(false)
    }

    // wishlist data fetching
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await axios.get(`/api/car/wish-list?email=${userInfo?.email}`, { cache: 'no-store' });
                setWishList(response?.data?.data)
                setLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [userInfo?.email, setLoading, refreshPage]);


    const contextInfo = {
        loading,
        setLoading,
        carsData,
        setCarsData,
        userInfo,
        setUserInfo,
        logOut,
        wishList,
        setWishList,
        searchResult,
        setSearchResult,
        isLogin,
        setIsLogin,
        refreshPage,
        setRefreshPage
    }
    return (
        <Context.Provider value={contextInfo}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;