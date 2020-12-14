import styles from '../styles/footer.module.css'

export default function Footer(props) {
  return (
    <footer className={styles.footer}>
      <button className={styles.toggle} onClick={props.click}>Press</button>
    </footer>
  );
}
