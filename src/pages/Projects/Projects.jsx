import { useDispatch, useSelector } from "react-redux"
import { ProjectsError, ProjectsIsLoading, SelectProjects } from "../../redux/projects/selectors";
import { useEffect, useState } from "react";
import { fetchProjects } from "../../redux/projects/operations";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { Pagination } from "../../components/Pagination/Pagination";

import s from './Projects..module.css';

export const Projects = () => {
    const dispatch = useDispatch();

    const projects = useSelector(SelectProjects);
    const error = useSelector(ProjectsError);
    const isLoading = useSelector(ProjectsIsLoading);

    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 4;

    useEffect(() => {
        dispatch(fetchProjects());
    }, [dispatch]);

    const lastIndex = currentPage * projectsPerPage;
    const firstIndex = lastIndex - projectsPerPage;
    const currentProjects = projects.slice(firstIndex, lastIndex);

    

    return (
        <div className="container">
            <h2>Projects</h2>
            {isLoading && <p>Loading...</p>}
            {error && <p>Failed to load projects</p>}
            {projects && (
                <div className={s.projects}>
                    <ul className={s.projects_list}>
                        {currentProjects.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </ul>
                    <Pagination 
                        total={projects.length}
                        perPage={projectsPerPage}
                        current={currentPage}
                        setCurrent={setCurrentPage} 
                    />
                </div>
            )}
        </div>
    )
}