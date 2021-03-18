import styles from "../styles/findtablebet.module.css";
import axios from "axios";
import { useState } from "react";

export default function FindTableBet(props) {
  const x = 3
  const [down, setDown] = useState(0);
  const [up, setUp] = useState(5*x);
  const [btnDown, setBtnDown] = useState(true);
  const [btnUp, setBtnUp] = useState(false);
  const bet = props.bet.slice(down, up);

  const remover = async (id) => {
    const token = localStorage.getItem("token");
    const result = await axios.delete("http://localhost:8080/removebet", {
      headers: { key: token },
      data: { id },
    });
    props.att(result.data.trader.reverse());
  };

  const next = () => {
    if (bet.length < 5*x) {
      setBtnUp(true);
    } else {
      if (down == 0 && up == 5*x) {
        setDown(down + 5*x);
        setUp(up + 5*x);
        setBtnDown(false);
      } else {
        setDown(down + 5*x);
        setUp(up + 5*x);
      }
    }
  };

  const back = () => {
    if (down == 5*x && up == 10*x) {
      setDown(0);
      setUp(5*x);
      setBtnDown(true);
      setBtnUp(false);
    } else {
      setDown(down - 5*x);
      setUp(up - 5*x);
      setBtnUp(false);
    }
  };

  return (
    <div className={styles.findtablebet}>
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
            if (index < 5*x)
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
      <button onClick={back} disabled={btnDown}>
        Anterior
      </button>
      <button onClick={next} disabled={btnUp}>
        Próximo
      </button>
    </div>
  );
}
