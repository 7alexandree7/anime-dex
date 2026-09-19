import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  // 1. Pegue o cookie de sessão que o Better Auth cria
  const sessionToken = request.cookies.get("better-auth.session_token");
  
  const { pathname } = request.nextUrl;

  // 2. Se tentar entrar no /dashboard OU no /explore e NÃO estiver logado, manda para o /login
  if ((pathname.startsWith("/dashboard") || pathname.startsWith("/explore")) && !sessionToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// Configura quais rotas o Middleware deve monitorar de verdade
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/explore/:path*" // 💡 Adicionado para o Next.js interceptar essa rota também
  ], 
};
