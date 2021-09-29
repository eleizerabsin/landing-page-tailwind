import React from "react";
import { github, linkedin } from "../../data/data";

const Footer = () => {
  return (
    <div className="bg-bggray2">
      <div className="common-container">
        <div class="nav-footer-grid">
          <div className="text-sm text-gray-400 font-mono">
            Designed by Eleizer
          </div>
          <div className="text-sm mx-auto"></div>
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

export default Footer;
