import { useState } from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
    let [isActive, setIsActive] = useState(false);

    function toggleActive() {
        setIsActive(!isActive);
    }

    return (
        <>
            <nav className={`w-full flex justify-between items-center p-6 text-lg text-gray-800 shadow-sm bg-white sticky top-0 z-50 ${isActive ? 'hidden' : 'flex'}`}>
                <h1 className="font-semibold">AB</h1>
                <ul className="hidden md:flex gap-8 list-none">
                    <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
                        <li className="font-semibold hover:text-blue-600 cursor-pointer">Home</li>
                    </Link>
                    <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>
                        <li className="font-semibold hover:text-blue-600 cursor-pointer">About</li>
                    </Link>
                    <Link to="projects" spy={true} smooth={true} offset={-100} duration={500}>
                        <li className="font-semibold hover:text-blue-600 cursor-pointer">Projects</li>
                    </Link>
                    <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>
                        <li className="font-semibold hover:text-blue-600 cursor-pointer">Contact</li>
                    </Link>
                </ul>
                <i className="ri-menu-line md:hidden text-xl font-semibold text-gray-800" onClick={toggleActive}></i>
            </nav>

            <div className={`fixed inset-0 bg-white flex flex-col justify-center items-center z-50 ${isActive ? 'flex' : 'hidden'}`}>
                <i className="ri-close-line text-3xl absolute top-5 right-5" onClick={toggleActive}></i>
                <ul className="list-none">
                    <Link to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={toggleActive}>
                        <li className="text-center my-5 text-xl font-semibold text-gray-800">Home</li>
                    </Link>
                    <Link to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={toggleActive}>
                        <li className="text-center my-5 text-xl font-semibold text-gray-800">About</li>
                    </Link>
                    <Link to="projects" spy={true} smooth={true} offset={-100} duration={500} onClick={toggleActive}>
                        <li className="text-center my-5 text-xl font-semibold text-gray-800">Projects</li>
                    </Link>
                    <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} onClick={toggleActive}>
                        <li className="text-center my-5 text-xl font-semibold text-gray-800">Contact</li>
                    </Link>
                </ul>
            </div>
        </>
    );
}
