
import middleware from "next-auth/middleware";

// export function middleware(request: NextRequest) {
//     return NextResponse.redirect(new URL('/dashboard', request.url));
// }
export default middleware;

export const config = {
    // *: zero or more parameters
    // +: one or more parameters
    // ?: zero or one parameters
    // matcher: ['/users/:id*']
    matcher: ['/dashboard/:path*'] //in real life for dashboard protection and following paths
    
}