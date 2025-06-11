import { Education } from "../../components/Education/Education"
import { WorkExperience } from "../../components/WorkExperience/WorkExperience"
import { useMediaPoints } from "../../hooks/useMediaPoints"

export const Experience = () => {
    const { isMobile } = useMediaPoints();

    return (
        <div className={isMobile ? '' : "container"}>
            <Education />
            <WorkExperience />
        </div>
    )
}