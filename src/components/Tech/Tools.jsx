import { TOOLS } from "../../constants";

import s from './Tech.module.css';

export const Tools = () => {
    return (
            <div>
                <h2>Tools & Software</h2>
                <ul className={s.skills_list}>
                    {TOOLS.map((i) => (
                        <li key={i.name}>
                            <div className={s.skills_wrapper}>
                                <svg className={s.skills_svg}>
                                    <use href={i.logo} />
                                </svg>
                            </div>
                            
                            <p className={s.skills_name}>{i.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        )
}