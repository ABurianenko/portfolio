import { Education } from "../../components/Education/Education"
import { WorkExperience } from "../../components/WorkExperience/WorkExperience"
import { useMediaPoints } from "../../hooks/useMediaPoints"

import clsx from "clsx"

export const Experience = () => {
    const { isMobile } = useMediaPoints();

    return (
        <div className={clsx({ container: !isMobile })}>
            <Education />
            <WorkExperience />
        </div>
    )
}