import { NavLink } from "react-router-dom"
import { FaUserLarge, FaLaptopCode } from "react-icons/fa6";
import { BsViewList } from "react-icons/bs";
import { AiTwotoneSecurityScan } from "react-icons/ai";
import { RiContactsBook3Line } from "react-icons/ri";

import s from './Navigation.module.css'
import clsx from 'clsx';
import { useMediaPoints } from "../../hooks/useMediaPoints";


export const Navigation = ({closeMenu}) => {
    const { isDesktop } = useMediaPoints();

    const buildLinkClass = ({ isActive }) => {
        return clsx(s.link, isActive && s.active);
    };

    return (
        <nav className={isDesktop ? (s.nav) : (s.menu)}>
            <NavLink className={isDesktop ? buildLinkClass : (s.menu_link)} onClick={closeMenu} to="/about">
                <FaUserLarge />
                About
            </NavLink>
            <NavLink className={isDesktop ? buildLinkClass : (s.menu_link)} onClick={closeMenu} to="/experience">
                <BsViewList />
                Experience
            </NavLink>
            <NavLink className={isDesktop ? buildLinkClass : (s.menu_link)} onClick={closeMenu} to="/projects">
                <FaLaptopCode />
                Projects
            </NavLink>
            <NavLink className={isDesktop ? buildLinkClass : (s.menu_link)} onClick={closeMenu} to="/skills">
                <AiTwotoneSecurityScan />
                Skills
            </NavLink>
            <NavLink className={isDesktop ? buildLinkClass : (s.menu_link)} onClick={closeMenu} to="/contact">
                <RiContactsBook3Line />
                Contact
            </NavLink>
        </nav>
        
    )
}