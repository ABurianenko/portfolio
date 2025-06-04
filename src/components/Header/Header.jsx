import { useMediaPoints } from "../../hooks/useMediaPoints"
import { SwitchTheme } from "../../ui/SwitchTheme/SwitchTheme";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";

import s from './Header.module.css'

export const Header = () => {
    const { isDesktop } = useMediaPoints();

    return (
        <>
            {!isDesktop ? (
                <header className={s.header}>
                    <p className={s.header_logo}>PortFolio</p>
                    <div className={s.header_wrapper}>
                        <SwitchTheme />
                        <BurgerMenu />
                    </div> 
                </header>
            ) : (
                <header className={s.header}>
                    <p className={s.header_logo}>PortFolio</p>
                    <SwitchTheme />
                </header>
            )}
        </>
    )
}