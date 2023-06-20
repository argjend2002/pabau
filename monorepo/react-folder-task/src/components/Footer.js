import Logo from "../assets/img/pabauIcon.webp";
import React from "react";

const Footer = () => {
    return (
        <footer>
            Powered By <img src={Logo} className="logo" alt="Pabau" /> <a target='_blank' rel="noreferrer" href="https://www.pabau.com/">Pabau</a>
        </footer>
    );
}

export default Footer;