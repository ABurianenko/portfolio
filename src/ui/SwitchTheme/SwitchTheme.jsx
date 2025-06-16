import { useDispatch, useSelector } from "react-redux";
import { themeSelect } from "../../redux/theme/selectors";
import { toggleTheme } from "../../redux/theme/slice";
import { IoSunnySharp } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

import s from './SwitchTheme.module.css'

export const SwitchTheme = () => {
    const theme = useSelector(themeSelect);
    const dispatch = useDispatch();
    
    return (
        <button
            onClick={() => dispatch(toggleTheme())}
            className={s.themeBtn}
        >
            {theme === 'light' ? <FaMoon /> : <IoSunnySharp className={s.themeIcon} /> }
        </button>
    )
}