import { NavLink } from "react-router-dom";
import "../../assets/css/siteNav.css";

function SiteNav() {
  const navLinks = [
    { label: "Home", url: "/" },
    { label: "Projects", url: "/projects" },
    { label: "Contact", url: "/contact" },
  ];
  return (
    <>
      <nav>
        {navLinks.map((navLink) => (
          <NavLink
            className={({ isActive }) =>
              isActive ? "activeLink" : "inactiveLink"
            }
            key={navLink.url}
            to={navLink.url}
          >
            {navLink.label}
          </NavLink>
        ))}
      </nav>
    </>
  );
}

export default SiteNav;
