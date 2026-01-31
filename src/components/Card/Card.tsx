import styles from './Card.module.less';

type Props = {
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
    id?: string;
};

export const Card = ({ className, style, children, id }: Props) => {
    return (
        <div id={id} className={`${styles.card} ${className}`} style={{ ...style }}>
            {children}
        </div>
    );
}
