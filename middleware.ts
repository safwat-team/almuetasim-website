import { NextMiddleware } from "next/server";
import i18nMiddleware from "./lib/middlewares/i18n.middleware";
import authMiddleware from "./lib/middlewares/auth.middleware";
import rbacMiddleware from "./lib/middlewares/rbac.middlware";
import { stackMiddlewares } from "./lib/middlewares/stackHandler";

export type MiddlewareFactory = (middleware: NextMiddleware) => NextMiddleware;

// middlewares order
// 1. Log the request
// 2. Security headers and checks
// 3. Rate limiting
// 4. Internationalization
// 5. Authentication
// 6. Role-based access control
const middlewares = [
  // loggingMiddleware,
  // securityMiddleware,
  // rateLimitMiddleware,
  i18nMiddleware,
  authMiddleware,
  rbacMiddleware,
];

export default stackMiddlewares(middlewares);

export const config = {
  matcher: [
    "/((?!api|static|.*\\..*|_next|favicon.ico|manifest.json|robots.txt).*)",
    "/api/((?!auth).*)",
  ],
};
