import React from "react";
import './MobileNav.css';
import { Link } from 'react-router-dom';

const MobileNav = ({ isOpen, toggleMenu }) => {
    return (
        <>
            <div
                className={`mobile-menu ${isOpen ? "active" : ""}`}
                onClick={toggleMenu}
            >
            
            <div className="mobile-menu-container">
                <img className="logo" src="./assets/images/red-logo.svg" alt="" />

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

                    <button className="contact-btn" onClick={() => {}}>
                        Ẩn Menu
                    </button>
                </ul>
            </div>

            </div>
        </>
    )
}

export default MobileNav;