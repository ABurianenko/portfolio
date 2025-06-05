import s from './WorkExperience.module.css'

export const WorkExperience = () => {
    return (
        <div>
            <h2>Experience</h2> 
            <div className={s.work}>
                <img className={s.work_logo} src="/images/Logo_Intertop.png" alt="Intertop Company Logo" />
                <h4 className={s.work_company}><span>Company: </span>Intertop Ukraine, LLC</h4>
                <p className={s.work_role}><span>Role: </span>Deputy Chief Accountant</p>
                <p className={s.work_duration}><span>Duration: </span>June, 2019 - July, 2023</p>
                <div className={s.work_desc}>
                    <p>I started working as a middle accountant, and was promoted to deputy chief
                    accountant, where I performed the following duties:
                    </p>
                    <ul className={s.work_desc_list}>
                        <li>preparation of financial, tax, and statistical reporting;</li>
                        <li>audit organization;</li>
                        <li>organization and control of the cost accounting sector;</li>
                        <li>automation of accounting processes
                        </li>
                    </ul>
                    <p>
                        Achievement: capitalized 80% of development costs
                    </p>
                </div>
                
            </div>
        </div>
    )
}