import { NavLink } from "react-router-dom";
import "../../assets/css/siteNav.css";

function SiteNav() {
  const navLinks = [
    { label: "Home", url: "/" },
    { label: "Projects", url: "/projects" },
    { label: "About", url: "/about" },
  ];
  return (
    <div>
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
    </div>
  );
}

export default SiteNav;
