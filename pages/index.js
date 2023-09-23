// Next
import Image from "next/image";

// Framer Motion
import { motion } from "framer-motion";

// Components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// Variants
import { FadeIn } from "../variants";

const Home = () => {
  return (
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
          <h1 className="h1">
            Transforming Ideas
            <br /> Into <span className={"text-accent"}>Digital Reality</span>
          </h1>
          {/*subtitle*/}
          <p className={"max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"}>
            Lorem ipsum dolor sit amet. Aut explicabo architecto sit
            exercitationem delectus vel enim enim eos voluptatibus quasi sed
            cumque enim in dolore harum est iste quis?
          </p>
          {/*button*/}
          <div className="flex justify-center xl:hidden">
            <ProjectBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
