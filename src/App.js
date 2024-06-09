import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
import Main from "./components/main/Main";
import MissionVision from "./components/mission/MissionVision";
import Navbar from "./components/navabar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
      <MissionVision />
      <Footer />
      <About />
      <Contact />
      <Login />
    </div>
  );
}

export default App;
