import LocationOnIcon from '@mui/icons-material/LocationOn';
import ApartmentIcon from '@mui/icons-material/Apartment';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
const InfoSection = () =>{
    return(
        <div className="p-8 profile-sect rounded-3xl mb-4 ">
            <div className="flex justify-between pb-8">
                <div className="flex items-center gap-3 font-sans text-gray-500">
                    <LocationOnIcon sx={{color:'gray'}} fontSize="sm" />
                    <span>Based in</span>
                </div>
                <div className="text-gray-500 font-sans">
                    Pakistan
                </div>
            </div>
            <div className="flex justify-between pb-8">
                <div className="flex items-center gap-3 font-sans text-gray-500">
                    <ApartmentIcon sx={{color:'gray'}} fontSize="sm" />
                    <span>Company</span>
                </div>
                <div className="text-gray-500 font-sans">
                    / Yet to Decide
                </div>
            </div>
            <div className="flex justify-between pb-8">
                <div className="flex items-center gap-3 font-sans text-gray-500">
                    <GitHubIcon sx={{color:'gray'}} fontSize="sm" />
                    <span>GitHub</span>
                </div>
                <div className="text-gray-500 font-sans">
                    muzamilali1201
                </div>
            </div>
            <div className="flex justify-between pb-8">
                <div className="flex items-center gap-3 font-sans text-gray-500">
                    <LinkedInIcon sx={{color:'gray'}} fontSize="sm" />
                    <span>Linkedin</span>
                </div>
                <div className="text-gray-500 font-sans">
                    Muzamal Ali
                </div>
            </div>
            <div className="flex justify-between">
                <div className="flex items-center gap-3 font-sans text-gray-500">
                    <EmailIcon sx={{color:'gray'}} fontSize="sm" />
                    <span>Email</span>
                </div>
                <div className="text-gray-500 font-sans">
                    muzamalali1201@gmail.com
                </div>
            </div>
        </div>
    )
}
export default InfoSection