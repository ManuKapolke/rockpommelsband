import { NavLink } from "react-router-dom";
import styles from "./Header.module.less";
import React from "react";
import PaperplaneIcon from "../../assets/papierflieger.svg";
import PaperplaneLightIcon from "../../assets/papierflieger-hell.svg";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "react-feather";

export const Header = () => {
  const [isLogoHovered, setIsLogoHovered] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrollbarWidth, setScrollbarWidth] = React.useState(0);
  const headerRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      const header = headerRef.current;
      if (!header) return;

      // Don't update blur state when menu is open
      if (isMenuOpen) return;

      if (window.scrollY > 0) {
        header.classList.add(styles.scrolled);
      } else {
        header.classList.remove(styles.scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen, styles.scrolled]);

  React.useEffect(() => {
    if (isMenuOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      const header = headerRef.current;

      // Save original scroll behavior
      const originalScrollBehavior =
        document.documentElement.style.scrollBehavior;
      // Temporarily disable smooth scrolling
      document.documentElement.style.scrollBehavior = "auto";

      // Calculate scrollbar width to prevent layout shift
      const scrollbarWidthValue =
        window.innerWidth - document.documentElement.clientWidth;

      // Disable scrolling after opening animation completes (0.3s)
      const scrollDisableTimeout = setTimeout(() => {
        setScrollbarWidth(scrollbarWidthValue);
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = "100%";
        document.body.style.overflow = "hidden";
        // Add padding to compensate for scrollbar to prevent flickering
        if (scrollbarWidthValue > 0) {
          document.body.style.paddingRight = `${scrollbarWidthValue}px`;
        }
      }, 300);

      // Remove blur from header after opening animation completes (0.3s)
      // Menu overlay will have blur instead
      const blurRemovalTimeout = setTimeout(() => {
        if (header) {
          header.classList.remove(styles.scrolled);
        }
      }, 300); // Match menu opening animation duration

      return () => {
        // Clear timeouts if menu closes before animation completes
        clearTimeout(scrollDisableTimeout);
        clearTimeout(blurRemovalTimeout);
        // Remove fixed positioning first
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
        // Reset scrollbar width state
        setScrollbarWidth(0);
        // Restore scroll position immediately after removing fixed
        // Use explicit behavior: 'auto' to prevent smooth scrolling
        window.scrollTo({ top: scrollY, left: 0, behavior: "auto" });
        // Also set directly as fallback
        document.documentElement.scrollTop = scrollY;
        document.body.scrollTop = scrollY;
        // Restore original scroll behavior
        document.documentElement.style.scrollBehavior = originalScrollBehavior;

        // After menu exit animation completes (0.3s), restore header blur if needed
        setTimeout(() => {
          if (header) {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 0) {
              header.classList.add(styles.scrolled);
            } else {
              header.classList.remove(styles.scrolled);
            }
          }
        }, 300); // Match menu animation duration
      };
    }
  }, [isMenuOpen, styles.scrolled]);

  const closeMenu = () => setIsMenuOpen(false);

  const menuVariants = {
    closed: {
      x: "100%",
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/termine", label: "Termine" },
    { to: "/band", label: "Band" },
    { to: "/galerie", label: "Galerie" },
    { to: "/kontakt", label: "Kontakt" },
  ];

  return (
    <header ref={headerRef} className={styles.root}>
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
      <nav className={styles.desktopNav}>
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
                    </li> */}
          <li>
            <NavLink
              to="/galerie"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Galerie
            </NavLink>
          </li>
          {/* <li>
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
      <button
        className={styles.burgerButton}
        style={{
          right:
            scrollbarWidth > 0
              ? `calc(var(--page-side-padding) + ${scrollbarWidth}px)`
              : undefined,
        }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <motion.div
          animate={isMenuOpen ? "open" : "closed"}
          initial="closed"
          variants={{
            closed: { rotate: 0 },
            open: { rotate: 180 },
          }}
          transition={{ duration: 0.3 }}
        >
          {isMenuOpen ? (
            <X size={36} className={styles.burgerIcon} />
          ) : (
            <Menu size={36} className={styles.burgerIcon} />
          )}
        </motion.div>
      </button>
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.nav
              className={styles.mobileMenu}
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <ul className={styles.mobileNavList}>
                {navLinks.map((link) => (
                  <li key={link.to} onClick={closeMenu}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        isActive ? styles.active : undefined
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
