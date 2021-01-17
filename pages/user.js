import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/user.module.css";

export default function User() {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState([]);
  const router = useRouter();

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
        console.log(res.data);
        setAuth(res.status);
        setUser(res.data);
      })
      .catch((err) => console.log("Deu ruim " + err));
  }, []);

  if (auth !== 200) {
    return <div>...</div>;
  } else {
    return (
      <div className={styles.user}> 
        {/* {user.map((res) => (
        <h2 key={res.id}>{res.name}</h2>
      ))} */}
       <p>Welcome <span>{user.name}</span> to the Gol de Trader </p> 
      </div>
    );
  }
}
