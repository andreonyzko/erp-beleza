import styles from './Button.module.css';

function Button({text, handleOnClick, btntype}) {
    return (
        <button className={`${styles.button} ${styles[`btn_${btntype}`]}`} type="button" onClick={handleOnClick}>{text}</button>
    )
}

export default Button;