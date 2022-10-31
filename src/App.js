import { About } from "./sections/About/About";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Intro } from "./sections/Intro/Intro";
import { Benefits } from "./sections/Benefits/Benefits";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Intro />
        <About />
        <Benefits />
      </main>
      <Footer />
    </div>
  );
}

export default App;
