import Layout from "@/Components/Layout";

import "../styles/globals.css";
import ScrollTop from "../Components/ScrollTop";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ScrollTop />
    </>
  );
}
