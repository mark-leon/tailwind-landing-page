import "./App.css";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
import Main from "./components/main/Main";
import Navbar from "./components/navabar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
      <Login />
    </div>
  );
}

export default App;
