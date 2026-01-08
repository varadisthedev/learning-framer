import React from "react";
import logo from "../assets/image.png";
import targetLogo from "../assets/target.png";

export default function Header() {
  return (
    <>
      <div className="flex flex-row justify-center items-center gap-10 pt-10">
        {/* main part of header */}
        <img src={logo} className="h-28 w-28 rounded-2xl    "></img>

        <div className="flex flex-col justify-center items-start gap-1">
          <div className="flex flex-row items-center justify-end gap-2.5">
            <img src={targetLogo} className="h-4 w-4"></img>
            <h3 className="truncate text-xs font-medium">
              Learn JS Basics with 30 Qs
            </h3>
            <a
              href="www.example.com"
              className="cursor-pointer whitespace-nowrap text-xs underline"
            >
              <u>Learn more</u>
            </a>
          </div>

          <h2 className="truncate lc-md:text-3xl text-2xl font-bold text-lc-text-primary dark:text-dark-lc-text-primary">
            30 Days of JavaScript
          </h2>

          {/* progress bar  */}
          <div className="h-2 w-60 bg-gray-400 rounded-3xl">
            <div className="h-2 w-10 bg-green-500 rounded-3xl"></div>
          </div>
        </div>
      </div>
    </>
  );
}
