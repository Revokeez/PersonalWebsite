/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
    return (
        <footer className="footer bg-base-200/60 px-6 py-4">
          <div className="flex w-full items-center justify-between">
          <aside className="grid-flow-col items-center">
            <p>©2025 <a className="link link-hover font-medium" href="#">Edwin</a></p>
          </aside>
            <div className="flex gap-4 h-5">
              <a href="https://github.com/Revokeez" className="link" aria-label="Github Link">
                <span className="icon-[tabler--brand-github] size-5"></span>
              </a>
              <a href="https://www.linkedin.com/in/edwin-vazquez-a8a208279/" className="link" aria-label="X Link">
                <span className="icon-[tabler--brand-linkedin] size-5"></span>
              </a>
              <a href="mailto:edwinmvazquez1@gmail.com" className="link" aria-label="Google Link">
                <span className="icon-[tabler--brand-gmail] size-5"></span>
              </a>
            </div>
          </div>
        </footer>
    );
}

export default Footer;