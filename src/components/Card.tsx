import styles from './Card.module.css'

interface CardProps {
    title: string
    imageUrl: string
}

export default function Card(props: CardProps) {
    return (
        <div className={styles.container}>
            <p className={styles.label}>{props.title}</p>
            <img className={styles.image} src={props.imageUrl} />
        </div>
    )
}