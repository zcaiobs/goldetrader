import styles from "../styles/tablebet.module.css";
import axios from "axios";

export default function TableBet(props) {
  const bet = props.bet

  const remover = async (id) => {
    const token = localStorage.getItem("token");
    const result = await axios.delete("http://localhost:8080/removebet", {
      headers: { key: token },
      data: { id },
    });
    props.att(result.data.trader.reverse());
  };

  return (
    <table className={styles.listable}>
      <thead>
        <tr>
          <th>Nº</th>
          <th>Evento</th>
          <th>Campeonato</th>
          <th>Resultado</th>
          <th>Estratégia</th>
          <th>Data</th>
          <th>*</th>
        </tr>
      </thead>
      <tbody>
        {bet.map((item, index) => {
          if (index < 5)
            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.event}</td>
                <td>{item.championship}</td>
                <td>{item.result}</td>
                <td>{item.strategy}</td>
                <td>{item.date}</td>
                <td>
                  <button
                    className={styles.btnremover}
                    onClick={() => remover(item.id)}
                  >
                    x
                  </button>
                </td>
              </tr>
            );
        })}
      </tbody>
    </table>
  );
}
