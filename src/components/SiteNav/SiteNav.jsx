import { NavLink } from "react-router-dom";

function SiteNav() {
  const navLinks = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
  ];
  return (
    <div>
      <nav>
        {navLinks.map((navLink) => (
          <NavLink key={navLink.url} to={navLink.url}>
            {navLink.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default SiteNav;
