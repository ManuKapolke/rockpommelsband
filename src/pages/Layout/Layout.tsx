import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.less';

export const Layout = () => {
    return (
        <div className={styles.mainGrid}>
            <Header />
            <div className={styles.content}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};
