import { Link } from "react-router-dom"

import s from './ProjectCard.module.css'

export const ProjectCard = ({project}) => {
    return (
        <div className={s.card}>
            <div>
                <img className={s.card_img} src={project.image} alt={project.name} loading="lazy" />
                <h3 className={s.card_name}>{project.name}</h3>
                <p className={s.card_desc}>{project.shortDescription}</p>
            </div>
            
            <Link className={s.card_link} to={`/projects/${project.id}`}>Learn more</Link>
        </div>
    )
}