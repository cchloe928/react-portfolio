import logo from './logo.svg';
import './App.css';
import Header from "./component/Header"
import About from "./component/About"
import Projects from "./component/Projects"
import Contact from "./component/Contact"
import Footer from "./component/Footer"


function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <main>
          <section className="chloe's">
            <About />
            <Projects />
            <Contact />

          </section>
        </main>

        <Footer />
      </div>


    </div>
  );
}

export default App;
