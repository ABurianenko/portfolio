import { Profile } from "../../components/Profile/Profile";
import { Summary } from "../../components/Summary/Summary"
import { useMediaPoints } from "../../hooks/useMediaPoints"

export const About = () => {
    const { isMobile } = useMediaPoints();

    return (
        <>
            {isMobile ? (
                <div>
                    <Profile />
                    <Summary />
                </div>
            ) : (
                <div className="container">
                    <Summary />
                </div>   
            )}
        </>
        
    )
}