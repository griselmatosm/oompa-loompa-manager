import styles from './Heading.module.css';

interface HeadingProps {
  title: string;
  subtitle?: string;
}

export default function Heading({ title, subtitle }: HeadingProps) {
  return (
    <section className={styles.heading}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </section>
  )
}