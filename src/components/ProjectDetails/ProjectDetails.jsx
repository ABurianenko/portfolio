import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { SelectProjects } from "../../redux/projects/selectors";


import s from './ProjectDetails.module.css';

export const ProjectDetails = () => {
    const { id } = useParams();
    const projects = useSelector(SelectProjects);
    const project = projects.find(p => p.id === Number(id));

    if (!project) return <p>Project not found</p>

    return (
        <div className={s.info}>
            <img className={s.info_img} src={project.image} alt={project.name} />
            <div className={s.info_header}>
                <h3 className={s.info_name}>{project.name}</h3>
                <p className={s.info_role}>{project.role}</p>
                <a className={s.info_link} href={project.link} target="blank">Live Demo</a>
                <a className={s.info_link} href={project.gitHub} target="blank">GitHub</a>  
            </div>
            
            <p className={s.info_desc}>{project.fullDescription}</p>

            <ul className={s.info_features}>
                {project.features.map((feature, idx) => (
                    <li key={idx}>
                        {feature}
                    </li>
                ))}
            </ul>

            <div className={s.info_stack}>
                <h4 className={s.info_stack_title}>Tech Stack</h4>
                <ul className={s.info_stack_list}>
                    {project.stack.map((tech, i) => (
                        <li className={s.info_stack_item} key={i}>
                            <span>{tech.tech}:</span> {tech.usage}
                        </li>
                    ))}
                </ul>
            </div>
            
        </div>
    )
}