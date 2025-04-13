import styles from './Card.module.css'

export default function Card(props) {
    return (
        <div className={styles.container}>
            <p className={styles.label}>{props.title}</p>
            <img className={styles.image} src={props.imageUrl} />
        </div>
    )
}