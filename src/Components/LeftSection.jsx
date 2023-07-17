import ProfileSection from "./ProfileSection.jsx";
import InfoSection from "./InfoSection.jsx";
import TechSection from "./TechSection.jsx"
import EducationSection from "./EducationSection.jsx"
import ExperienceSection from "./ExperienceSection.jsx"
const LeftSection = () =>{
    return(
        <div className="col-span-1 p-4">
            <ProfileSection />
            <InfoSection />
            <TechSection />
            <EducationSection />
            <ExperienceSection />

        </div>
    )
}
export default LeftSection;