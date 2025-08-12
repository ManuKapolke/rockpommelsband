import { NavLink } from "react-router-dom";
import styles from "./Header.module.less";
import React from "react";
import PaperplaneIcon from "../../assets/papierflieger.svg";
import PaperplaneLightIcon from "../../assets/papierflieger-hell.svg";

// TODO: Aktuelle Seite in hover Farbe
// TODO: Burger-Menü
export const Header = () => {
  React.useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(`.${styles.root}`);
      if (window.scrollY > 0) {
        header?.classList.add(styles.scrolled);
      } else {
        header?.classList.remove(styles.scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isLogoHovered, setIsLogoHovered] = React.useState(false);

  return (
    <header className={styles.root}>
      <a
        href="/"
        className={styles.logo}
        onMouseEnter={() => setIsLogoHovered(true)}
        onMouseLeave={() => setIsLogoHovered(false)}
      >
        {/* <SvgPaperPlane /> */}
        <img
          src={isLogoHovered ? PaperplaneLightIcon : PaperplaneIcon}
          alt="Paper Plane Logo"
        />
      </a>
      <nav>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink
              to="/termine"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Termine
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/band"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Band
            </NavLink>
          </li>
          {/* <li>
                        <NavLink to="/press">Pressespiegel</NavLink>
                    </li>
                    <li>
                        <NavLink to="/gallery">Galerie</NavLink>
                    </li>
                    <li>
                        <NavLink to="/video">Videos</NavLink>
                    </li> */}
          <li>
            <NavLink
              to="/kontakt"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Kontakt
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
