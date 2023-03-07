
export default defineNuxtPlugin(() => {
  const router = useRouter();
  const routes = router.getRoutes();

  // router.afterEach(async (to) => {

  //   if (token) {
  //     if (to.path === "/login") {
  //       router.push({ path: "/" });
  //     }
  //   } else {
  //     if (to.path !== "/login") {
  //       router.push(`/login?redirect=${to.path}`);
  //     }
  //   }
  // });
  // router.afterEach(() => {
  //   done();
  // });
});
