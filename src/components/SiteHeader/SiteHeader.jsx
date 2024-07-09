import SiteNav from "../SiteNav/SiteNav";
import { useState } from "react";
import "../../assets/css/siteHeader.css";

function SiteHeader() {
  const [showNav, setShowNav] = useState(false);

  function handleNavClick() {
    setShowNav(!showNav);
  }

  return (
    <div className="headerWrapper">
      <h2 className="headerInitials">SD</h2>

      <img
        className="headerBurgerIcon"
        title="hamburger icons"
        onClick={handleNavClick}
        src="./menu.png"
      />

      <div className={`${showNav ? "show" : "noShow"}`}>
        <SiteNav />
      </div>
    </div>
  );
}

export default SiteHeader;
