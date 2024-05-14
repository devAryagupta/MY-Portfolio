import React, { useRef, useState,useEffect } from "react";
import './Navbar.css'
import logo from '../Assets/logo.svg'
import underline from '../Assets/nav_underline.svg'
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from '../Assets/menu_open.svg'
import menu_close from '../Assets/menu_close.svg'







const Navbar =() =>{
    const[menu,setMenu]=useState("home");
    const menuRef =useRef();

    const handleScroll = () => {
        const sections = ['home', 'about', 'services', 'work', 'contact']; // IDs of your sections
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                const mid = rect.top + (rect.height / 2);
                if (scrollPosition > mid ) {
                    setMenu(section);
                }
            }
        }
    };

    useEffect(() => {
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Remove event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const openMenu =() =>{
        menuRef.current.style.right="0";
    }
    const closeMenu =() =>{
        menuRef.current.style.right="-350px";
    }
return(
    <div className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open"/>
        <ul ref={menuRef} className="nav-menu">
            <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
            <li><AnchorLink className="anchor-link" href="#home"><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==='home'?<img src={underline} alt="" />:<></>}</li>
            <li><AnchorLink className="anchor-link" offset={75} href="#about"><p onClick={()=>setMenu("about")}>About</p></AnchorLink>{menu==='about'?<img src={underline} alt="" />:<></>}</li>
            <li><AnchorLink className="anchor-link" offset={75} href="#services"><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==='services'?<img src={underline} alt="" />:<></>}</li>
            <li><AnchorLink className="anchor-link" offset={75} href="#work"><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==='work'?<img src={underline} alt="" />:<></>}</li>
            <li><AnchorLink className="anchor-link" offset={75} href="#contact"><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==='contact'?<img src={underline} alt="" />:<></>}</li>
        </ul>

        <div className="nav-connect"><AnchorLink className="anchor-link" offset={75} href="#contact">Connect with Me</AnchorLink></div>
    </div>
)
}
export default Navbar
