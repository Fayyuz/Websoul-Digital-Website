import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  
  // Add security headers explicitly in middleware as a fallback
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  
  // Log critical paths or unusual patterns if needed
  if (process.env.NODE_ENV === 'production' && !request.nextUrl.pathname.startsWith('/_next')) {
    console.log(`[REQ] ${request.method} ${request.nextUrl.pathname} - ${new Date().toISOString()}`)
  }
  
  return response
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}
