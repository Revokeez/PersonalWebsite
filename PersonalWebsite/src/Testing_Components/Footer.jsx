/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Link = ({href, icon, ariaLabel}) => {
  const iconHtml = `icon-[tabler--brand-${icon}] size-5 duration-300 ease-in-out hover:-translate-y-1`
  return (
    <a href={href} className="link" aria-label={ariaLabel} target="_blank">
      <span className={iconHtml}></span>
    </a>
  )
}

const Footer = () => {
    return (
        <footer className="footer bg-base-200/60 px-6 py-" id="footer">
            <div className="flex w-full items-center justify-between">
                <aside className="grid-flow-col items-center">
                  <p>©2025 <a className="link link-hover font-medium  duration-300 ease-in-out hover:-translate-y-1" href="#">Edwin</a></p>
                </aside>
                <div className="flex gap-4 h-5">
                    <Link href="https://github.com/Revokeez" icon="github" ariaLabel="Github Link" />
                    <Link href="https://www.linkedin.com/in/edwin-vazquez-a8a208279/" icon="linkedin" ariaLabel="Linkedin Link"/>
                    <Link href="mailto:edwinmvazquez1@gmail.com" icon="gmail" ariaLabel="Google Link"/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;