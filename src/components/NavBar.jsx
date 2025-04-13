import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

export default function NavBar() {
    return (
        <div className={styles.container}>
            <Link className={styles['nav-item']} to="/">Home</Link>
            <Link className={styles['nav-item']} to="/count">Count</Link>
            <Link className={styles['nav-item']} to="/list">List</Link>
            <Link className={styles['nav-item']} to="/cards">Cards</Link>
            <Link className={styles['nav-item']} to="/api">API</Link>
        </div>
    )
}