/* eslint-disable no-unused-vars */
import React from "react";
import "flyonui/flyonui.js";

const Navbar = () => {
    return (
        <nav className="navbar rounded-box shadow-base-300/20 shadow-sm">
            <div className="w-full md:flex md:items-center md:gap-2">
                <div className="flex items-center justify-between">
                <div className="navbar-start items-center justify-between max-md:w-full">
                    <a className="link text-base-content link-neutral text-xl font-bold no-underline" href="">Edwin</a>
                    <div className="md:hidden">
                    <button type="button" className="collapse-toggle btn btn-outline btn-secondary btn-sm btn-square" data-collapse="#default-navbar-collapse" aria-controls="default-navbar-collapse" aria-label="Toggle navigation" >
                        <span className="icon-[tabler--menu-2] collapse-open:hidden size-4"></span>
                        <span className="icon-[tabler--x] collapse-open:block hidden size-4"></span>
                    </button>
                    </div>
                </div>
                </div>
                <div id="default-navbar-collapse" className="md:navbar-end collapse hidden grow basis-full overflow-hidden transition-[height] duration-300 max-md:w-full" >
                    <ul className="menu md:menu-horizontal gap-2 p-0 text-base max-md:mt-2">
                        <li><a href="#whoami" className="hover:text-violet-300">Who am I</a></li>
                        <li><a href="#awards" className="hover:text-violet-300">Awards</a></li>
                        <li><a href="#projects" className="hover:text-violet-300">Projects</a></li>
                        <li><a href="#workexperience" className="hover:text-violet-300">Work Experience</a></li>
                        <li><a href="#dowloadresume" className="hover:text-violet-300">Download Resume</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
