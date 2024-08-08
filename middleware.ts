import { auth } from "@/auth";

export default auth((req) => {
  console.log("====================================");
  console.log("route:", req.nextUrl.pathname);
  console.log("====================================");
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
