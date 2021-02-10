import styles from "../styles/tablebet.module.css"

export default function TableBet() {
  return (
    <table className={styles.listable}>
    <thead>
      <tr>
        <th>Evento</th>
        <th>Campeonato</th>
        <th>Resultado</th>
        <th>Estratégia</th>
        <th>Data</th>
      </tr>
    </thead>
    <tbody>
      <tr>
       <td>Hello Wordsffffffffffffffffffffffffffffffffffffff</td>
       <td>mais um</td>
       <td>Hello Word</td>
       <td>mais um</td>
       <td>Hello Word</td>
      </tr>
    </tbody>
  </table>
  )
}