import { About } from "./sections/About/About";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Intro } from "./sections/Intro/Intro";
import { Benefits } from "./sections/Benefits/Benefits";
import { Product } from "./sections/Product/Product";
import { TryNow } from "./sections/TryNow/TryNow";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Intro />
        <About />
        <Benefits />
        <Product />
        <TryNow />
      </main>
      <Footer />
    </div>
  );
}

export default App;
