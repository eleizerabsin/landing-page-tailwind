import React from "react";

const Footer = () => {
  return (
    <div className="bg-bggray2">
      <div className="common-container">
        <div class="nav-footer-grid">
          <div className="text-sm text-gray-400">all rights reserved</div>
          <div className="text-sm mx-auto"></div>
          <div className="space-x-4 text-right text-2xl">
            <div className="inline-block">
              <i class="devicon-github-original"></i>
            </div>
            <div className="inline-block">
              <i class="devicon-linkedin-plain"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
