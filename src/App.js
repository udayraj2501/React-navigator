import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Feature from "./components/feature/Feature";
import Community from "./components/community/Community";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="body">
        <Main />
        <Feature />
        <Community />
        <Footer />
      </div>
    </div>
  );
}

export default App;
