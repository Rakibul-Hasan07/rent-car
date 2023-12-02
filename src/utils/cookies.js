'use server'
import { cookies } from 'next/headers'

export async function setCookie(token) {
    cookies().set('authToken', token)
}


export async function getCookie(data) {
    const tokenProperty = cookies().get(data)
    const token = tokenProperty?.value;
    return token;
}

export async function deleteCookie(data) {
    cookies().delete(data)
}