import Button from '../Button/Button'

import styles from './TopBar.module.css'

function TopBar({ title, btn, handleOnClick, btntype}) {
    return(
        <section className={styles.topbar}>
            <h1>{title}</h1>
            {btn && (
                <Button text={btn} handleOnClick={handleOnClick} btntype={btntype}/>
            )}
        </section>
    )
}

export default TopBar;