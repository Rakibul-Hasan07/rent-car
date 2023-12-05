'use server'
import { cookies } from 'next/headers'

export async function setCookie(token) {
    cookies().set('authToken', token)
}
export async function setAuthCookie(token) {
    console.log(token)
    cookies().set('nextAuthToken', token)
}


export async function getCookie(data) {
    const tokenProperty = cookies().get(data)
    const token = tokenProperty?.value;
    return token;
}

export async function deleteCookie(data) {
    cookies().delete(data)
}
export async function deleteAuthCookie(data) {
    cookies().delete(data)
}