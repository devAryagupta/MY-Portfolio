import React, { useRef, useState } from "react";
import './Navbar.css';
import logo from '../Assets/logo.svg';
import underline from '../Assets/nav_underline.svg';
import AnchorLink from "react-anchor-link-smooth-scroll";
import menuOpen from '../Assets/menu_open.svg';
import menuClose from '../Assets/menu_close.svg';

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState("home");
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0";
    }

    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
    }

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
        const offset = document.querySelector('.navbar').offsetHeight;
        const element = document.getElementById(menu);
        window.scrollTo({
            top: element.offsetTop - offset,
            behavior: "smooth"
        });
    }

    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            <img src={menuOpen} onClick={openMenu} alt="Open Menu" className="nav-mob-open" />
            <ul ref={menuRef} className="nav-menu">
                <img src={menuClose} onClick={closeMenu} alt="Close Menu" className="nav-mob-close" />
                {["home", "about", "services", "work", "contact"].map((menu) => (
                    <li key={menu}>
                        <AnchorLink className="anchor-link" href={`#${menu}`} onClick={() => handleMenuClick(menu)}>
                            <p>{menu.charAt(0).toUpperCase() + menu.slice(1)}</p>
                        </AnchorLink>
                        {activeMenu === menu && <img src={underline} alt="Underline" />}
                    </li>
                ))}
            </ul>
            <div className="nav-connect">
                <AnchorLink className="anchor-link" href="#contact" onClick={() => handleMenuClick("contact")}>Connect with Me</AnchorLink>
            </div>
        </nav>
    );
}

export default Navbar;