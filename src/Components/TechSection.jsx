const TechSection = () =>{
    return(
        <div className="profile-sect rounded-3xl p-8 mb-4">
            <h1 className="text-xl text-gray-500 font-semibold pb-4">
                Tech Stack
            </h1>
        <div className="flex items-center justify-center p-3 flex-wrap gap-3">
            <span className="tech-stack p-1 rounded-3xl">React js</span>
            <span className="tech-stack p-1 rounded-3xl">JavaScript</span>
            <span className="tech-stack p-1 rounded-3xl">PHP</span>
            <span className="tech-stack p-1 rounded-3xl">Tailwind</span>
            <span className="tech-stack p-1 rounded-3xl">Bootstrap</span>
            <span className="tech-stack p-1 rounded-3xl">Material UI</span>
            <span className="tech-stack p-1 rounded-3xl">Python</span>
        </div>
        </div>
    )
}
export default TechSection;