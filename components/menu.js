import styles from '../styles/menu.module.css'

export default function Menu(props) {

    return(
      <div className={styles.menu}>
        <button onClick={() => props.option("a")}>Página Inicial</button>
        <button onClick={() => props.option("b")}>Apostas</button>
        <button onClick={() => props.option("c")}>Option 3</button>
        <button onClick={() => props.option("d")}>Option 4</button>
        <button onClick={() => props.option("e")}>Option 5</button>
      </div>
    )
}