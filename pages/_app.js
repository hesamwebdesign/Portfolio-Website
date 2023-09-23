import "../styles/globals.css";

// Components
import Layout from "../components/Layout";

import Transition from "../components/Transition";

import { AnimatePresence, motion } from "framer-motion";

import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div className={"h-full"} key={router.route}>
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
