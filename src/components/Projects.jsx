export default function Projects(){
    return (
        <section className="py-24 px-10 md:px-40 bg-[#fff5f5]" id="projects">
            <h4 className="text-[#147EFB] text-xl uppercase mb-2">Portfolio</h4>
            <h3 className="text-[#2D2E32] text-2xl mb-12">Marrying design aesthetics with web technology to produce captivating sites.</h3>

            <div className="project-two p-8 bg-white rounded-lg shadow-md flex flex-col md:flex-row md:justify-around gap-8 mb-8">
                <div className="one-img-area">
                    <a href="https://github.com/adityab5/lms" className="block">
                        <img src="/images/project-one.jpg" alt="project-pic" className="w-full max-h-80 object-contain rounded-lg shadow-md" />
                    </a>
                </div>

                <div className="one-text-area flex flex-col items-center text-center md:text-left">
                    <h4 className="text-[#2D2E32] mt-2 mb-5">Larning Management System</h4>
                    <p className="text-[#767676] font-medium mb-7">
                        A comprehensive Learning Management <br/> designed to facilitate online education  <br/>  by providing seamless access to course  <br/> materials, assessments, and interactive <br/>  tools. The platform supports user roles for <br/> administrators, instructors, and students,  <br/>  such as course creation, progress tracking, <br/>  and real-time collaboration, all within  <br/> an intuitive and user-friendly interface.
                    </p>

                    <div className="stack mb-10">
                        <span className="tech bg-white mx-1 px-4 py-2 shadow-md font-medium">Full Stack</span>
                        <span className="tech bg-white mx-1 px-4 py-2 shadow-md font-medium">MERN</span>
                    </div>

                    <div className="links mt-10 flex justify-center md:justify-start">
                        <a href="https://github.com/adityab5/lms" className="text-[#2D2E32] font-medium text-lg mx-4 transition-colors duration-300 hover:text-[#147EFB]">Code <i className="ri-github-line text-xl"></i></a>
                        <a href="" className="text-[#2D2E32] font-medium text-lg mx-4 transition-colors duration-300 hover:text-[#147EFB]">Live Demo <i className="ri-external-link-line text-xl"></i></a>
                    </div>
                </div>
            </div>

            {/* Duplicate block for the second project */}
            <div className="project-one p-8 bg-white rounded-lg shadow-md flex flex-col md:flex-row md:justify-around gap-8 mb-8">
                <div className="one-img-area">
                    <a href="https://github.com/adityab5/lms" className="block">
                        <img src="/images/project-two.jpg" alt="project-pic" className="w-full max-h-80 object-contain rounded-lg shadow-md" />
                    </a>
                </div>

                <div className="one-text-area flex flex-col items-center text-center md:text-left">
                    <h4 className="text-[#2D2E32] mt-2 mb-5">PG Management System</h4>
                    <p className="text-[#767676] font-medium mb-7">
                        PG Management System is a web-based application<br/> designed to streamline the management of guest <br/>accommodations. It allows administrators to<br/> efficiently manage tenants, track rent payments, <br/>maintain records, and handle<br/> inquiries, all in one place. The system is<br/> user-friendly, ensuring that both managers<br/> and tenants have a seamless experience<br/> with real-time updates and notifications.
                    </p>

                    <div className="stack mb-10">
                        <span className="tech bg-white mx-1 px-4 py-2 shadow-md font-medium">Full Stack</span>
                        <span className="tech bg-white mx-1 px-4 py-2 shadow-md font-medium">MERN</span>
                    </div>

                    <div className="links mt-10 flex justify-center md:justify-start">
                        <a href="https://github.com/M-D-Nadeem/pgperfect" className="text-[#2D2E32] font-medium text-lg mx-4 transition-colors duration-300 hover:text-[#147EFB]">Code <i className="ri-github-line text-xl"></i></a>
                        <a href="" className="text-[#2D2E32] font-medium text-lg mx-4 transition-colors duration-300 hover:text-[#147EFB]">Live Demo <i className="ri-external-link-line text-xl"></i></a>
                    </div>
                </div>
            </div>
                        {/* Duplicate block for the second project */}
            <div className="project-one p-8 bg-white rounded-lg shadow-md flex flex-col md:flex-row md:justify-around gap-8 mb-8">
                <div className="one-img-area">
                    <a href="https://github.com/adityab5/lms" className="block">
                        <img src="/images/project-three.jpg" alt="project-pic" className="w-full max-h-80 object-contain rounded-lg shadow-md" />
                    </a>
                </div>

                <div className="one-text-area flex flex-col items-center text-center md:text-left">
                    <h4 className="text-[#2D2E32] mt-2 mb-5">Pacman Web Game</h4>
                    <p className="text-[#767676] font-medium mb-7">
                        This Pac-Man game is a classic arcade remake<br/> developed using JavaScript, HTML, and CSS.<br/> The project features the iconic gameplay of navigating<br/> Pac-Man through a maze, eating pellets,<br/> and avoiding ghosts. The game logic is implemented in JavaScript,<br/> handling player movements, collision detection,<br/> and ghost AI. The project is designed with responsive<br/> graphics and smooth animations, delivering<br/> an engaging and nostalgic experience
                    </p>

                    <div className="stack mb-10">
                        <span className="tech bg-white mx-1 px-4 py-2 shadow-md font-medium">JavaScript</span>
                        <span className="tech bg-white mx-1 px-4 py-2 shadow-md font-medium">CSS</span>
                    </div>

                    <div className="links mt-10 flex justify-center md:justify-start">
                        <a href="https://github.com/adityab5/game-pacman" className="text-[#2D2E32] font-medium text-lg mx-4 transition-colors duration-300 hover:text-[#147EFB]">Code <i className="ri-github-line text-xl"></i></a>
                        <a href="https://game-pacman-ab.vercel.app/" className="text-[#2D2E32] font-medium text-lg mx-4 transition-colors duration-300 hover:text-[#147EFB]">Live Demo <i className="ri-external-link-line text-xl"></i></a>
                    </div>
                </div>git
            </div>
            
        </section>
    )
}
