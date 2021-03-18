import styles from "../styles/createbet.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import TableBet from "../components/tablebet";

export default function CreateBet(props) {
  const [bet, setBet] = useState({});
  const [list, setList] = useState([]);

  const comp = async () => {
    try {
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("token");

        const options = {
          method: "GET",
          headers: { token: token },
          data: null,
          url: "http://localhost:8080/page",
        };
        return await axios.request(options);
      }
    } catch (err) {
      router.push("/login");
    }
  };

  useEffect(() => {
      comp()
        .then((res) => {
          setList(res.data.trader.reverse());
        })
        .catch((err) => console.log("Error " + err));
  }, []);

  const handleValue = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setBet({
      ...bet,
      [name]: value,
    });
  };

  const salvarBet = async () => {
    try {
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("token");

        const options = {
          method: "POST",
          headers: { key: token },
          data: bet,
          url: "http://localhost:8080/newbet",
        };
        return await axios.request(options);
      }
    } catch (err) {
      console.log("Error: " + err);
    }
  };

  const descartar = (event) => {
    document.getElementById("form").reset();
    setBet("");
    event.preventDefault();
  };

  const salvar = async (event) => {
    document.getElementById("form").reset();
    event.preventDefault();
    const result = await salvarBet()
      .then((res) => {
        return res.data.trader;
      })
      .catch((err) => console.log(err));
    setList(result.reverse());
  };

  return (
    <div className={styles.createbet}>
      <form
        className={styles.form}
        id="form"
        onChange={handleValue}
        onSubmit={salvar}
      >
        <div className={styles.btnaction}>
          <h1>create bet</h1>
          <div>
            <button className={styles.btndescartar} onClick={descartar}>
              Descartar
            </button>
            <button className={styles.btnsalvar}>Salvar</button>
          </div>
        </div>
        <div className={styles.bet}>
          <div className={styles.first}>
            <label>
              Evento
              <br />
              <input
                name="event"
                type="text"
                placeholder="Brasil x Argentina"
                required
              />
            </label>
            <label>
              Campeonato
              <br />
              <input
                name="championship"
                type="text"
                placeholder="Copa do Mundo"
                required
              />
            </label>
            <div className={styles.result}>
              <label>
                Entrada
                <br />
                <input
                  name="stake"
                  type="number"
                  min="0.00"
                  step="0.01"
                  placeholder="0,00"
                  required
                />
              </label>
              <label>
                Odd
                <br />
                <input
                  name="odd"
                  type="number"
                  min="0.00"
                  step="0.01"
                  placeholder="0,00"
                  required
                />
              </label>
              <label>
                Resultado
                <br />
                <input
                  name="result"
                  type="number"
                  min="0.00"
                  step="0.01"
                  placeholder="0,00"
                  required
                />
              </label>
            </div>
          </div>
          <div className={styles.second}>
            <label>
              Data
              <br />
              <input type="date" name="date" id="" required />
            </label>
            <label>
              Estratégia
              <br />
              <input name="strategy" required />
            </label>
            <label>
              Descrição
              <br />
              <textarea name="description" required />
            </label>
          </div>
        </div>
      </form>
      <hr />
      <div className={styles.listbet}>
        <h1>List the 5 last Bets</h1>
        <TableBet bet={list} att={(att) => setList(att)} />
      </div>
    </div>
  );
}
