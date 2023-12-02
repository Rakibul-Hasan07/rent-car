import { NextResponse } from 'next/server'
import { getCookie } from './utils/cookies';

export async function middleware(request) {
    const authToken = await getCookie('authToken');
    console.log(authToken);
    const loggedUserNotAccess = request.nextUrl.pathname.startsWith('/auth/login') || request.nextUrl.pathname.startsWith('/auth/register')
    if (loggedUserNotAccess) {
        if (authToken) {
            return NextResponse.redirect(new URL('/', request.url))
        }
    }
    else if (!authToken) {
        return NextResponse.redirect(new URL('/auth/login', request.url))
    }

}

export const config = {
    matcher: [
        '/dashboard/:path*',
        '/auth/login',
        '/auth/register'
    ],
}