/* eslint-disable no-unused-vars */
import React from "react";

const Navbar = () => {
    return (
        <nav>
            <div className="flex m-5">
                <a href="" className="mr-auto font-mono text-4xl max-sm:hidden">Edwin</a>
                <ul className="gap-5 flex md:text-2xl ml-5 font-latoItalic">
                    <li><a href="#whoami" className="hover:text-violet-300">Who am I</a></li>
                    <li><a href="#projectsandawards" className="hover:text-violet-300">Projects and Awards</a></li>
                    <li><a href="#workexperience" className="hover:text-violet-300">Work Experience</a></li>
                    <li><a href="#dowloadresume" className="hover:text-violet-300">Download Resume</a></li>
                </ul>
            </div>

        </nav>
    );
};

export default Navbar;
