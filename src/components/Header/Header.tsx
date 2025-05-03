import { NavLink } from 'react-router-dom';
import styles from './Header.module.less';
import React from 'react';

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

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={styles.root}>
            <a href="/" className={styles.logo}>
                {/* <SvgPaperPlane /> */}
                <img src="src/assets/paperplane.svg" alt="Paper Plane Logo" className='filter' />
            </a>
            <nav>
                <ul className={styles.navList}>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="/konzerte">Konzerte</NavLink>
                    </li> */}
                    <li>
                        <NavLink to="/about">Band</NavLink>
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
                        <NavLink to="/contact">Kontakt</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
