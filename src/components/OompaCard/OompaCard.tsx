import styles from './OompaCard.module.css';
interface OompaCardProps {
  name: string;
  image: string;
  gender: string;
  profession: string;
}
export default function OompaCard({ name, image, gender, profession }: OompaCardProps) {
  return (
    <div className={styles.oompaCard}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{gender}</p>
      <p>{profession}</p>
    </div>
  )
}