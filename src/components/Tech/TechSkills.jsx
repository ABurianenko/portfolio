import { TECH_SKILLS } from "../../constants"

import s from './Tech.module.css'

export const TechSkills = () => {
    return (
        <div>
            <h2>Skills</h2>
            <ul className={s.skills_list}>
                {TECH_SKILLS.map((i) => (
                    <li key={i}>
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