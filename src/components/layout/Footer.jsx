// Write all the code here
import React from "react";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Burger Shop</h2>
        <p>We are trying to give you the best taste possible.</p>
        <br />
        <em>We give attention to genuine feedback.</em>
        <strong>All right received @burgershop</strong>
      </div>
      <aside>
        <h4>Follow Us</h4>
        <a href="www.youtube.com" target="_blank" rel="noopener noreferrer">
          <AiFillYoutube />
        </a>
        <a href="www.instagram.com" target="_blank" rel="noopener noreferrer">
          <AiFillInstagram />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
