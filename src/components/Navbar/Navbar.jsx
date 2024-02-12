import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';
import MobileNav from "./MobileNav/MobileNav";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

            <nav className="nav-wrapper">
                <div className="nav-content">
                    <img className="logo" src="./assets/images/text-logo-tet.svg" alt="" />

                    <ul>
                        <li>
                            <Link className="menu-item" to="/">Trang chủ</Link>
                        </li>
                        <li>
                            <Link className="menu-item" to="/ban-dieu-hanh">Ban Điều Hành</Link>
                        </li>
                        <li>
                            <Link className="menu-item" to="/">Chương trình</Link>
                        </li>
                        <li>
                            <Link className="menu-item" to="/">Liên hệ</Link>
                        </li>

                        {/* <button className="contact-btn" onClick={() => {}}>
                            Hire Me
                        </button> */}
                    </ul>

                    <button class="menu-btn" onClick={toggleMenu}>
                        <span
                            className="material-symbols-outlined"
                            style={{ fontSize: "1.8rem" }}
                        >
                            {openMenu ? <box-icon name='x' color='#fff'></box-icon> : <box-icon name='menu' color='#fff'></box-icon>}
                        </span>
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;