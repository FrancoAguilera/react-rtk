import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>
      <h3 className="tracking-tight leading-none py-10 text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
        <Link to="/">Ultimate Task Manager</Link>
      </h3>
      <div className="relative flex pb-10 items-center">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="flex-shrink mx-4 text-gray-400">Content</span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
    </React.Fragment>
  );
}

export default Header;
