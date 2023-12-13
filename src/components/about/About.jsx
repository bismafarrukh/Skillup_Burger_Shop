import React from "react";
import me from "../../assets/skj.jpg";
import search from "../../assets/search.svg";


const About = () => {
  const containerStyle = {
    textAlign: "center",
   
  };
  const aboutUs = {
    backgroundColor: "grey",
    textAlign: "left",
    color: "Red",
    paddingLeft: "40px",
  };
  const shop = {
    fontSize: "50px",
    padding: "40px",
  };
  const last = {
    backgroundColor: "grey",
    color: "white",
    padding: "10px",
    height: "400px",
  };
  const image = {
    borderRadius: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    paddingLeft: "40px",
  };
  const founder = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  };
  const nelson = {
    textAlign: "left",
    padding: "30px",
    paddingLeft: "120px",
  };
  const paragraph = {
    fontSize: "30px",
    position: "relative",
    top: "-250px",
    left: "100px",
    lineHeight: "1.5",
    fontFamily: "banger",
  };
  const burger = {
    display: "flex",
    flexDirection: "column",
    fontSize: "large",
    fontFamily:"banger",
    fontSize:"20px",
  };
  const icon={
    padding:"30px",
  }

  const responsiveStyles = {
    // Media query for screens smaller than 768px
    "@media (max-width: 768px)": {
      shop: {
        fontSize: "40px",
      },
      last: {
        height: "auto",
      },
      paragraph: {
        top: 0,
        left: 0,
        textAlign: "center",
        padding: "20px",
      },
    },
  };

  return (
    <div style={containerStyle}>
      <h1 style={aboutUs}>About Us</h1>
      <article>
        <h4 style={{ ...shop, ...responsiveStyles.shop }}>Burger Shop</h4>
        <p style={burger}>
          This is Burger Shop. The place for the most tasty burgers on the
          entire earth.
        </p>
        <p style={burger}>
          Explore the various types of food and burgers. Click below to see the
          menu.
        </p>
        
        <p style={{ ...burger, marginBottom: "2em" }}></p>
        <img style={icon} src={search} alt="search icon"/>
      </article>
      <div style={{ ...last, ...responsiveStyles.last }}>
        <h2 style={founder}>Founder</h2>
        <article>
          <div>
            <img style={image} src={me} alt="Founder" />
            <h3 style={nelson}>Nelson</h3>
          </div>
          <p style={{ ...paragraph, ...responsiveStyles.paragraph }}>
            I am Nelson, the founder of Burger Shop. <br /> Affiliated to God
            Taste...
          </p>
        </article>
      </div>
    </div>
  );
};

export default About;

