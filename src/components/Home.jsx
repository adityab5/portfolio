export default function Home() {
    return (
        <section className="w-full min-h-screen p-6 md:p-16 bg-red-50 overflow-hidden" id="home">
            <div className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-10">
                <div className="text-gray-800">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">Full Stack <br /> Developer</h1>
                    <p className="text-gray-600 font-medium text-lg mb-4">
                        Hi, I am Aditya Bhushan. A passionate Web Developer. <br /> Developer based in Bangalore, Karnataka.
                    </p>
                    <span className="text-2xl flex gap-4">
                        <a href="https://www.linkedin.com/in/adityabhushan01" className="text-gray-800 hover:text-blue-500 transition-all">
                            <i className="ri-linkedin-box-line"></i>
                        </a>
                        <a href="https://github.com/adityab5" className="text-gray-800 hover:text-blue-500 transition-all">
                            <i className="ri-github-line"></i>
                        </a>
                    </span>
                </div>
                <div className="w-40 h-40 md:w-52 md:h-52">
                    <img
                        src="/images/profile3.jpg"
                        alt="profile"
                        className="w-full h-full border-2 border-black rounded-full md:rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-[morph_8s_ease-in-out_infinite]"
                    />
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 mt-10">
                <h3 className="text-gray-800 text-xl font-bold">Skills</h3>
                <p className="hidden md:block text-gray-400 text-xl">|</p>
                <div className="flex flex-wrap justify-center gap-4">
                    <img src="https://skillicons.dev/icons?i=html,css,js" className="hover:-translate-y-2 transition-transform cursor-pointer" />
                    <img src="https://skillicons.dev/icons?i=react,tailwind,next" className="hover:-translate-y-2 transition-transform cursor-pointer" />
                    <img src="https://skillicons.dev/icons?i=nodejs,redux,mongodb" className="hover:-translate-y-2 transition-transform cursor-pointer" />
                    <img src="https://skillicons.dev/icons?i=express,postgresql,git" className="hover:-translate-y-2 transition-transform cursor-pointer" />
                    <img src="https://skillicons.dev/icons?i=typescript,bootstrap,github" className="hover:-translate-y-2 transition-transform cursor-pointer" />
                    <img src="https://skillicons.dev/icons?i=postman,," className="hover:-translate-y-2 transition-transform cursor-pointer" />
                </div>
            </div>
        </section>
    );
}
