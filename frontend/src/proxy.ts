import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define which routes require authentication before rendering
const isProtectedRoute = createRouteMatcher(['/checkout(.*)']);

export const proxy = clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect(); // Redirects unauthenticated users directly to OAuth sign-in
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and static assets, run middleware on everything else
    '/((?!_next|[^?]*\\.(?:html|css|js|pjs|json|png|jpg|jpeg|gif|svg|ico|csv|txt)).*)',
    '/(api|trpc)(.*)',
  ],
};
