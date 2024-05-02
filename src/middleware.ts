import { getToken } from "next-auth/jwt"
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
export {default} from 'next-auth/middleware'

export async function middleware(request: NextRequest) {
        const token = await getToken({ req: request});
        const url = request.nextUrl;
if( token &&
    (
        url.pathname === '/signup' ||
        url.pathname === '/login' ||
        url.pathname === '/create-account'||
        url.pathname === '/forget-password'
    )
){
    return NextResponse.redirect(new URL('/jobs', request.url))

}
if(!token &&
    (
        url.pathname === '/jobs' 
    )
){
    return NextResponse.redirect(new URL('/create-account', request.url))

}


  }
   
  export const config = {
    matcher: [
        '/signup',
        '/login',
        '/jobs',
        '/create-account',
    ],
  }
