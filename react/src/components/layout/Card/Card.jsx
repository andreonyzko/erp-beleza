import styles from './Card.module.css';

function Card( {color, title, highlight, details}) {
    return(
    <div className={`${styles.card} ${styles[`${color}_card`]}`}>
        <p className={styles.title_card}>{title}</p>
        <div className={styles.card_highlight}>
            <p>{highlight}</p>
        </div>
        <p className={styles.details_card}>
            {details}
        </p>
    </div>
    )
}

export default Card;