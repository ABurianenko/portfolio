import { FaFileLines } from "react-icons/fa6";

import s from './Education.module.css'

export const Education = () => {
    return (
        <div>
            <h2>Education</h2>
            <ul className={s.education_list}>
                <li className={`${s.education_item} ${s.course}`}>
                    <div className={s.course_desc}>
                        <p className={s.education_text}>2024-2025</p>
                        <h4 className={s.education_school}>IT School GoIT</h4>
                        <p className={s.education_text}>Fullstack Developer</p>
                    </div>
                    
                    <a href="/public/Anastasiia_Burianenko_certificate.pdf" target="_blank" rel="noopener noreferrer">
                        <FaFileLines  className={s.certificate} />
                    </a>
                </li>
                <li className={`${s.education_item} ${s.master}`}>
                    <p className={s.education_text}>2018-2020</p>
                    <h4 className={s.education_school}>Kyiv National Economics University</h4>
                    <p className={s.education_text}>Master’s Degree, Accounting and taxation</p>
                </li>
                <li className={`${s.education_item} ${s.bachelor}`}>
                    <p className={s.education_text}>2014-2018</p>
                    <h4 className={s.education_school}>Kyiv National Economics University</h4>
                    <p className={s.education_text}>Bachelor’s Degree, Economics of Enterprise</p>
                </li>
            </ul>
        </div>
    )
}