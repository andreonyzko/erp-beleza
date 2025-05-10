import {Link} from 'react-router-dom'
import MenuIcon from '../../../media/menu-icons/menu-icon.png'
import Logo from '../../../media/logo.png'

import styles from './Header.module.css'

function Header( { unnav, setUnnav }) {
    return (
        <header>
            <img src={MenuIcon} alt="menu-icon" className={styles.nav_btn} onClick={() => {setUnnav(!unnav)}} />
            <Link to="/"><img src={Logo} alt="" /></Link>
        </header>
    )
}

export default Header;