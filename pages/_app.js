import Layout from "@/components/Layout";
import "@/styles/globals.css";
import Login from "./login-page";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isRootPath = router.pathname === "/";

  return isRootPath ? (
    <Login />
  ) : (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
