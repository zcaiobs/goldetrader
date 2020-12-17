import Header from "../components/header";
import Footer from "../components/footer";
import Hero from './hero'
import Content from './content'
import Redirect from './redirect'

export default function App() {
  return (
    <div className='app'>
      <Header />
      <Hero />
      <Content />
      <Redirect />
      <Footer />
    </div>
  );
}
