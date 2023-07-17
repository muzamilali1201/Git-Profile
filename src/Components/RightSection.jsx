import TopSection from "./TopSection.jsx"
import {useEffect,useState} from "react";
import fetchData from "./utils/fetchData.js"
import ReposSection from "./ReposSection.jsx";
const RightSection = ()=>{
    const[Data,setData] = useState([]);
    useEffect(() => {
        const fetchDataAsync = async () => {
                const data = await fetchData()
                setData(data)

        };
        fetchDataAsync();
    }, []);
    return(
        <div className="col-span-2 p-4 sm:col-span-2">
            <div className="main-sect rounded-3xl p-4">
                <TopSection />
                <div className="grid md:grid-cols-2 lg:grid-cols-2  gap-6 col-span-1">
                {Data.map((item,index)=>(
                    <ReposSection key={index} item={item}/>
                ))}
                </div>
            </div>
        </div>
    )
}
export default RightSection;