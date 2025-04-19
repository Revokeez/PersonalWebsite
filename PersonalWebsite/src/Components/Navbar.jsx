/* eslint-disable no-unused-vars */
import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar rounded-box shadow">
            <div className="w-full md:flex md:items-center md:gap-2">
                <div className="flex items-center justify-between">
                    <div className="navbar-start items-center justify-between max-md:w-full">
                        <a
                            className="link text-base-content link-neutral text-xl font-semibold no-underline"
                            href="#">
                            Edwin
                        </a>

                    </div>
                </div>
                <div
                    className="md:navbar-end grow max-sm:hidden">
                    <ul className="menu menu-horizontal gap-2 p-0 text-base max-md:mt-2">
                        <li><a href="#whoami">Who am I</a></li>
                        <li><a href="#projectsandawards">Projects and Awards</a></li>
                        <li><a href="#workexperience">Work Experience</a></li>
                        <li><a href="#dowloadresume">Download Resume</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
