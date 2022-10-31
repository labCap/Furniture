import { About } from "./components/About/About";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Intro } from "./components/Intro/Intro";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Intro />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
