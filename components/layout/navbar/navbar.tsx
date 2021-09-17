import { useState, Fragment } from "react";
import Link from "next/link";
import DarkModeToggle from "react-dark-mode-toggle";
import NavbarButton from "./navbar-button/navbar-button";
import { useRouter } from "next/router";
import { useTheme } from "../../../store/theme-context";

import useNavbarStyles from "./styles";

export type NavbarProps = {};

interface LinkType {
  path: string;
  text: string;
}

const Navbar = () => {
  const [isSmallNavbarOpen, setIsSmallNavbarOpen] = useState<boolean>(false);
  const { isDarkMode, toggleDarkMode, theme } = useTheme();
  const classes = useNavbarStyles({ theme });
  const router = useRouter();
  const { pathname } = router;
  const toggleSmallNavbar = () => {
    setIsSmallNavbarOpen((prevState) => !prevState);
  };
  const links: LinkType[] = [
    { path: "/", text: "HOME" },
    { path: "/contact", text: "CONTACT" },
  ];
  const linksToRender: React.ReactNode = (
    <Fragment>
      {links.map((link) => (
        <Link href={link.path}>
          <a className={pathname === `${link.path}` ? "active" : undefined}>
            {link.text}
          </a>
        </Link>
      ))}
    </Fragment>
  );
  return (
    <header className={classes.Navbar}>
      <div className={classes.mainNavbar}>
        <h2>📚 Book Store</h2>
        <DarkModeToggle
          onChange={toggleDarkMode}
          checked={isDarkMode}
          size={60}
          speed={1.6}
        />
        <nav className={classes.bigNavbar}>{linksToRender}</nav>
        <NavbarButton isOpen={isSmallNavbarOpen} onClick={toggleSmallNavbar} />
      </div>
      {isSmallNavbarOpen && (
        <nav className={classes.smallNavbar}>{linksToRender}</nav>
      )}
    </header>
  );
};

export default Navbar;
