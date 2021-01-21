import styles from "../styles/interface.module.css";
import Config from '../components/config'
import Menu from '../components/menu'
import Dashboard from '../components/dashboard'
import { useState } from "react";

export default function Interface() {
  const [btn, setBtn] = useState("a")

  return (
    <div className={styles.interface}>
      <div className={styles.container}>
        <div className={styles.config}>
          <Config />
        </div>
        <div className={styles.row}>
          <div className={styles.menu}>
            <Menu option={(res) => setBtn(res)}/>
          </div>
          <div className={styles.content}>
            <Dashboard select={btn}/>
          </div>
        </div>
      </div>
    </div>
  );
}
