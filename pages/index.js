// Next
import Head from "next/head";
import Image from "next/image";

// Framer Motion
import { motion } from "framer-motion";

// Components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// Variants
import { FadeIn, fadeIn } from "../variants";

const Home = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <div className={"bg-primary/60 h-full"}>
        {/*text*/}
        <div
          className={
            "w-full h-full bg-gradient-to-r from-primary/10 via-black/20"
          }
        >
          <div
            className={
              "text-center flex flex-col justify-center h-full mx-auto container xl:pt-32 xl:text-left"
            }
          >
            {/*title*/}
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h1"
            >
              Transforming Ideas
              <br /> Into <span className={"text-accent"}>Digital Reality</span>
            </motion.h1>
            {/*subtitle*/}
            <motion.p
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className={"max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"}
            >
              Lorem ipsum dolor sit amet. Aut explicabo architecto sit
              exercitationem delectus vel enim enim eos voluptatibus quasi sed
              cumque enim in dolore harum est iste quis?
            </motion.p>
            {/*button*/}
            <div className="flex justify-center xl:hidden relative">
              <ProjectBtn />
            </div>
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden xl:flex"
            >
              <ProjectBtn />
            </motion.div>
          </div>
        </div>
        {/*image*/}
        <div className={"absolute w-[1200px] h-full bottom-0 right-0"}>
          {/*background image*/}
          <div
            className={
              "w-full h-full bg-none xl:bg-explosion xl:bg-cover bg-right bg-no-repeat absolute mix-blend-color-dodge translate-z-0"
            }
          ></div>
          {/*particles*/}
          <div>Particles</div>
          {/*avatar*/}
          <div className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
            <Avatar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
