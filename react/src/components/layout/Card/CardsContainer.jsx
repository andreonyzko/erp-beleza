import styles from './CardsContainer.module.css'

function CardsContainer(props) {
    return(
        <section className={styles.cards_container}>{props.children}</section>
    )
}
export default CardsContainer;