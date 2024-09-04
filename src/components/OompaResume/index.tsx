import DOMPurify from 'dompurify';
import styles from './OompaResume.module.css';

interface OompaResumeProps {
  name: string;
  image: string;
  gender: string;
  profession: string;
  description: string;
}
export default function OompaResume({ name, image, gender, profession, description }: OompaResumeProps) {
  return (
    <div className={styles.oompaResumeContent}>
      <img className={styles.oompaImage} src={image} alt={`Picture of ${name}`} title={`Picture of ${name}`} />
      <div className={styles.oompaResumeInfo}>
        <div className={styles.oompaResumeInfoHeader}>
          <h2>{name}</h2>
          <p>{gender}</p>
          <p>{profession}</p>
        </div>
        <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}></p>
      </div>
    </div>
  )
}