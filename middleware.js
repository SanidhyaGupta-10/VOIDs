import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/",
  },
});

export const config = {
  matcher: ["/chat/:path*", "/hub/:path*"],
};

// Middleware to protect /chat and /hub routes, redirecting unauthenticated users to the sign-in page.
// I