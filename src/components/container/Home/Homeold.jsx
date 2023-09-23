import React from "react";
import portfolio from "../../../assets/portfolio.jpg";
import "./Home.scss";
import { motion } from "framer-motion";
import SS from "../../Typesentence/SS";

const Home = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1,
      },
    },
  };

  return (
    <motion.div
      className="container "
      id="home"
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 2,
        delay: 0.5,
      }}
    >
      <div className="profile">
        <img src={portfolio} alt="portfolio" />
      </div>
      <div className="profile_text">
        <h3 className="name">
          Hi, I'm <span>Hafsi Ahmed</span>
        </h3>
        <h2  className="webdev" >      
            <span className="job"> <span className="full" >Full Stack  <br />Web Developer</span> <SS/>  
            </span>
</h2>
        <span className="text">
          
          <span className="passionate">Passionate</span> <br />
          <span className="craft">To craft innovative</span> <br />
          <span className="product">Web Products.</span>
        </span> <br />
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate="animation"
        >
          Connect with me 
        </motion.a>

        <div className="web">Web Developer</div>
        <div className="ui">UI/UX Designer</div>
        <div className="freelance">Freelancer</div>
      </div>
    </motion.div>
  );
};

export default Home;
