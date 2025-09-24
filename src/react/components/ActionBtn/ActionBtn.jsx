import styles from './ActionBtn.module.scss';

function ActionBtn({ children, ...rest }) {
    return (
        <button className={styles.actionBtn} {...rest}>
            {children}
        </button>
    );
}

export default ActionBtn;
