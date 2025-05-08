import styles from './Card.module.less';

type Props = {
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
};

export const Card = ({ className, style, children }: Props) => {
    return (
        <div className={`${styles.card} ${className}`} style={{ ...style }}>
            {children}
        </div>
    );
}
