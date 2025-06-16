import { useEffect, useRef, useState } from "react"
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Navigation } from '../Navigation/Navigation'

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
    
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'; // 🔒 забороняє скрол
        } else {
            document.body.style.overflow = '';
        }
      
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);
      

    return (
        <div>
            <button onClick={toggleMenu} className={s.burgerBtn}>
                {isOpen ? <AiOutlineClose /> : <FaBars  />}
            </button>

            {isOpen && (
                <div className={s.overlay}>
                    <Navigation closeMenu={closeMenu} />
                </div>
                
            )}
        </div>
    )
}