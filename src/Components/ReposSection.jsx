import LinkIcon from '@mui/icons-material/Link';
import CircleIcon from '@mui/icons-material/Circle';
const ReposSection = ({item}) =>{
    return(
        <a href="#" className="profile-sect p-4 rounded-3xl">
            <div className="flex gap-3 items-center mb-3">
            <span className="text-gray-500" ><LinkIcon fontSize="md"/></span>
            <h1 className="text-lg font-semibold text-gray-500">{item.name}</h1>
            </div>
            <p className="text-gray-500">{item.description}</p>
            <div className="flex gap-1 mt-4 justify-end items-center">
                <span className={item.language === "JavaScript" ? "text-yellow-300" : (item.language === "Python" ? "text-green-400" : "text-purple-600")}><CircleIcon fontSize="sm"/></span>
            <p className="font-mono text-lg text-gray-500">{item.language}</p>
            </div>
        </a>
    )
}
export default ReposSection;