import { NavLink } from "react-router-dom"
import { FaUserLarge, FaLaptopCode } from "react-icons/fa6";
import { BsViewList } from "react-icons/bs";
import { AiTwotoneSecurityScan } from "react-icons/ai";
import { RiContactsBook3Line } from "react-icons/ri";

import s from './AppBar.module.css'
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  

export const AppBar = () => {
    return (
        <nav className={s.nav}>
            <NavLink className={buildLinkClass} to="/about">
                <FaUserLarge />
                About
            </NavLink>
            <NavLink className={buildLinkClass} to="/experience">
                <BsViewList />
                Experience
            </NavLink>
            <NavLink className={buildLinkClass} to="/projects">
                <FaLaptopCode />
                Projects
            </NavLink>
            <NavLink className={buildLinkClass} to="/skills">
                <AiTwotoneSecurityScan />
                Skills
            </NavLink>
            <NavLink className={buildLinkClass} to="/contact">
                <RiContactsBook3Line />
                Contact
            </NavLink>
        </nav>
        
    )
}