import { useEffect, useRef, useState } from "react"
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaUserLarge, FaLaptopCode } from "react-icons/fa6";
import { BsViewList } from "react-icons/bs";
import { AiTwotoneSecurityScan } from "react-icons/ai";
import { RiContactsBook3Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";

import s from './BurgerMenu.module.css'

export const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                closeMenu();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (e) => {
          if (menuRef.current && !menuRef.current.contains(e.target)) {
            closeMenu();
          }
        };
    
        if (isOpen) {
          document.addEventListener('mousedown', handleClickOutside);
        }
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [isOpen]);

    return (
        <div>
            <button onClick={toggleMenu} className={s.burgerBtn}>
                {isOpen ? <IoMdClose className={`${s.burgerBtn} ${s.closeBtn}`} /> : <FaBars  />}
            </button>

            {isOpen && (
                <div className={s.overlay}>
                    <nav className={s.menu}>
                        <NavLink className={s.menu_link} onClick={closeMenu} to="/about">
                            <FaUserLarge />
                            About
                        </NavLink>
                        <NavLink className={s.menu_link} onClick={closeMenu} to="/experience">
                            <BsViewList />
                            Experience
                        </NavLink>
                        <NavLink className={s.menu_link} onClick={closeMenu} to="/projects">
                            <FaLaptopCode />
                            Projects
                        </NavLink>
                        <NavLink className={s.menu_link} onClick={closeMenu} to="/skills">
                            <AiTwotoneSecurityScan />
                            Skills
                        </NavLink>
                        <NavLink className={s.menu_link} onClick={closeMenu} to="/contact">
                            <RiContactsBook3Line />
                            Contact
                        </NavLink>
                    </nav>
                </div>
                
            )}
        </div>
    )
}