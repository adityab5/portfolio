export default function Projects(){
    return (
        <section className="py-24 px-10 md:px-40 bg-[#fff5f5]" id="projects">
            <h4 className="text-[#147EFB] text-xl uppercase mb-2">Portfolio</h4>
            <h3 className="text-[#2D2E32] text-2xl mb-12">Marrying design aesthetics with web technology to produce captivating sites.</h3>

            <div className="project-one p-8 bg-white rounded-lg shadow-md flex flex-col md:flex-row md:justify-around gap-8 mb-8">
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
            
        </section>
    )
}
