import styles from '../styles/menu.module.css'

export default function Menu(props) {

    return(
      <div className={styles.menu}>
        <button onClick={() => props.option("a")}>Oprion 1</button>
        <button onClick={() => props.option("b")}>Option 2</button>
        <button onClick={() => props.option("c")}>Option 3</button>
        <button onClick={() => props.option("d")}>Option 4</button>
        <button onClick={() => props.option("e")}>Option 5</button>
      </div>
    )
}