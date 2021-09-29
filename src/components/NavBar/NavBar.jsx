import React from "react";
import { github, linkedin } from "../../data/data";

const NavBar = () => {
  return (
    <div className="bg-bggray1">
      <div className="common-container">
        <div class="nav-footer-grid">
          <div className="logo">el</div>
          <div className="mx-auto "></div>
          <div className="space-x-4 text-right text-2xl">
            <div className="inline-block">
              <a href={github} target="_blank">
                <i class="devicon-github-original"></i>
              </a>
            </div>
            <div className="inline-block">
              <a href={linkedin} target="_blank">
                <i class="devicon-linkedin-plain"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
