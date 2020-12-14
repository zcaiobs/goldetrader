import HeadConfig from "../components/head";
import Footer from "../components/footer";
import { useState } from "react";

export default function App() {

  const [color, setColor] = useState('bg-color-2');
  const [logo, setLogo] = useState('/logo-light2.svg');

  const toggle = () => {
    color == 'bg-color-2' ? setColor('bg-color-1') : setColor('bg-color-2')
    logo == '/logo-light2.svg' ? setLogo('/logo-dark.svg') : setLogo('/logo-light2.svg')
  }

  return (
    <div className={`app `+color}>
      <HeadConfig />
      <main className="content">
        <img src={logo} alt="logo light"/>
      </main>
      <Footer click={toggle}/>
    </div>
  );
}
