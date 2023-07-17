import Demo from "./demoimg.png"
const ProfileSection = ()=>{
    return(
        <div className="flex p-8 items-center justify-center profile-sect flex-col rounded-3xl mb-4">
            <div className="w-40 h-40 ring ring-indigo-700 ring p-1 rounded-full mb-4 ">
            <img src={Demo} className="rounded-full profile-img" />
            </div>
            <h1 className="font-bold text-3xl text-gray-500 mb-4">Muzamal Ali</h1>
            <p className="text-base-content text-gray-500 font-mono text-center mb-4">I'm a Student yet but working for becoming a web developer</p>
            <a href="#" className="uppercase text-gray-500 font-mono border border-gray-500 p-1 rounded-xl btn hover:bg-gray-400 text-gray-700">Download Resume</a>
        </div>
    )
}
export default ProfileSection