import { Profile } from "../../components/Profile/Profile";
import {Bio} from "../../components/Bio/Bio"
import { useMediaPoints } from "../../hooks/useMediaPoints"

export const About = () => {
    const { isMobile } = useMediaPoints();

    return (
        <>
            {isMobile ? (
                <div>
                    <Profile />
                    <Bio />
                </div>
            ) : (
                <div className="container">
                    <Bio />
                </div>   
            )}
        </>
        
    )
}