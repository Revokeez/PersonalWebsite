/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import "flyonui/flyonui.js";

// Icons
import { Menu, X} from "lucide-react"; 

const Link = ({ text, id }) => {
    return (
      <a
        href={`#${id}`}
        className="relative text-white hover:text-violet-300 after:bg-violet-300 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
      >
        {text}
      </a>
    );
  };
  

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const navigation = [
      { name: "Who am I", id: "whoami" },
      { name: "Awards", id: "awards" },
      { name: "Projects", id: "projects" },
      { name: "Work Experience", id: "workexperience" },
      { name: "Resume", id: "downloadresume"}
    ];
  
    return (
        <nav className="shadow-md top-0 left-0 w-full text-white">
            <div className="w-full flex justify-between items-center px-4 py-4">
                <div className="flex-1 text-left">
                <a className="link text-base-content link-neutral text-xl font-bold no-underline" href="">Edwin</a>
                </div>
                <div className="hidden md:flex justify-center space-x-8 text-base">
                {navigation.map((item) => (
                    <Link key={item.id} id={item.id} text={item.name} />
                ))}
                </div>
                <div className="md:hidden flex-1 text-right">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X color="white" size={28} /> : <Menu color="white" size={28} />}
                </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden shadow-md">
                    <div className="flex flex-col items-center space-y-4 py-4">
                        {navigation.map((item) => (
                            <Link key={item.id} id={item.id} text={item.name} />
                        ))}
                    </div>
                </div>
            )}
        </nav>

    );
  };

export default Navbar;
