import { useDispatch, useSelector } from "react-redux";
import { themeSelect } from "../../redux/theme/selectors";
import { toggleTheme } from "../../redux/theme/slice";
import { BsLightbulbFill } from "react-icons/bs";
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
            {theme === 'light' ? <BsLightbulbFill className={s.themeIcon} /> : <FaMoon />}
        </button>
    )
}