import { ProjectDetails } from "../../components/ProjectDetails/ProjectDetails"
import { BackBtn } from "../../ui/BackBtn/BackBtn"

export const ProjectDetailsPage = () => {
    return (
        <div className="container">
            <BackBtn />
            <ProjectDetails />
        </div>
    )
}