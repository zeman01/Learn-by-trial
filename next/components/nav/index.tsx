import React from "react";
import NavLinks from "./NavLinks";

const NavBar = () => {
  return (
    <nav className="tracking-wider border border-gray-200 rounded-sm flex items-center justify-between h-16 px-2">
      {/* links */}
      <NavLinks />
    </nav>
  );
};

export default NavBar;
