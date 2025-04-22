/* eslint-disable no-unused-vars */
import React from "react";
import "flyonui/flyonui.js";

const Link = ({text, id}) => {
    return (
        <li><a href= {`#${id}`} className="hover:text-violet-300 after:bg-violet-300 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">{text}</a></li>
    )
}

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
                        <Link id="whoami" text="Who am I" />
                        <Link id="awards" text="Awards" />
                        <Link id="projects" text="Projects"/>
                        <Link id="workexperience" text="Work Experience" />
                        <Link id="downloadresume" text="Download Resume"/>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
