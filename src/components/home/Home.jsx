

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import background from "../../assets/bg.jpg";
import Menu from "./Menu";

const options = {
  initial: { opacity: 0, y: -100 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const HomePage = () => {
  return (
    <div className="home-page">
      <motion.div
        className="content-overlay"
        initial="initial"
        animate="whileInView"
        variants={options}
      >
        <h1 style={{ fontSize: "55px", fontWeight: "bolder" }}>Burger Shop</h1>
        <p>Give yourself a tasty burger.</p>

       
        <Link to="/menu">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ border: "2px", borderRadius: "10%" }}
          >
            Explore Menu
          </motion.button>
        </Link>
      </motion.div>

      <div className="background-image">
        <img src={background} alt="burger image" height="800px" width="1264px" />
      </div>
    </div>
  );
};

export default HomePage;


