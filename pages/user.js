import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/user.module.css";
import Config from '../components/config'
import Menu from '../components/menu'
import Dashboard from '../components/dashboard'

export default function User() {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState([]);
  const router = useRouter();
  const [btn, setBtn] = useState("a")

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
        setAuth(res.status);
        setUser(res.data);
        console.log(res.data)
      })
      .catch((err) => console.log("Error " + err));
  }, []);

  if (auth !== 200) {
    return <></>;
  }

  if (auth === 202) {
    router.push("/verify")
    return <></>;
  }

  else {
    return (
      <div className={styles.user}> 
      <div className={styles.container}>
        <div className={styles.config}>
          <Config user={user.name}/>
        </div>
        <div className={styles.row}>
          <div className={styles.menu}>
            <Menu option={(res) => setBtn(res)}/>
          </div>
          <div className={styles.content}>
            <Dashboard select={btn} trader={user.trader}/>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
