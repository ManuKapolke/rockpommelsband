import styles from './Card.module.less';

type Props = {
    children: React.ReactNode;
};

export const Card = ({ children }: Props) => {
    return (
        <div className={styles.card}>
            {children}
        </div>
    );
}
