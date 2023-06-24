import Layout from "@/Components/Layout";
import ScrollTop from "../Components/ScrollTop";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
        <ScrollTop />
      </Layout>
    </>
  );
}
