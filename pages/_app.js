import "../styles/globals.css";

// Components
import Layout from "../components/Layout";

import Transition from "../components/Transition";

import { AnimatePresence, motion } from "framer-motion";

import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
