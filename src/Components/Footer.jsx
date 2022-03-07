import React from 'react';

import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';

function Footer() {
  return (
    <div className="flex flex-col bg-gray-900">
      <div className="flex flex-col py-12 px-6">
        <div className="flex flex-row justify-between items-center">
          <img
            src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adad44d1f072965b6_logo.svg"
            alt="logo"
          />

          <div className="flex flex-row gap-4">
            <FacebookIcon className="h-6 w-6 text-white hover:cursor-pointer" />
            <YouTubeIcon className="h-6 w-6 text-white hover:cursor-pointer" />
            <TwitterIcon className="h-6 w-6 text-white hover:cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-sm text-white py-2">
        Made With Love ❤. © 2022.
      </div>
    </div>
  );
}

export default Footer;
