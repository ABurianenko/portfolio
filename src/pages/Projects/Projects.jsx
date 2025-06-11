import { useDispatch, useSelector } from "react-redux"
import { ProjectsError, ProjectsIsLoading, SelectProjects } from "../../redux/projects/selectors";
import { useCallback, useEffect, useState } from "react";
import { fetchProjects } from "../../redux/projects/operations";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { Pagination } from "../../components/Pagination/Pagination";

import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

import s from './Projects.module.css';

export const Projects = () => {
    const dispatch = useDispatch();

    const projects = useSelector(SelectProjects);
    const error = useSelector(ProjectsError);
    const isLoading = useSelector(ProjectsIsLoading);

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    }, [projects.length]);

    const goToNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, [projects.length]);

    useEffect(() => {
        dispatch(fetchProjects());
    }, [dispatch]);

    useEffect(() => {
        const interval = setInterval(() => {
        goToNext();
    }, 5000);

        return () => clearInterval(interval);
    }, [goToNext]);
    
      

    const getProjectPosition = (index) => {
        if (index === currentIndex) return "active";
        if (index === (currentIndex - 1 + projects.length) % projects.length) return "prev";
        if (index === (currentIndex + 1) % projects.length) return "next";
        return "hidden";
    };

    return (
        <div className="container">
            <h2>Projects</h2>
                {isLoading && <p>Loading...</p>}
                {error && <p>Failed to load projects</p>}
            <div className={s.slider}>
                
        
                <button className={s.navBtn + " " + s.prev} onClick={goToPrev}><GrPrevious /></button>
                {projects.map((project, index) => (
                <ProjectCard
                    key={project.id}
                    project={project}
                    position={getProjectPosition(index)}
                />
                ))}
                <button className={s.navBtn + " " + s.next} onClick={goToNext}><GrNext /></button>
            </div>
        </div>
    );
}