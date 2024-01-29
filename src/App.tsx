import "./App.css";
import { Header } from "./components/Header/Header";
import { Nav } from "./components/Nav/Nav";
import { Content } from "./components/Content/Content";
import { Footer } from "./components/Footer/Footer";
import { LoginSignUp } from "./components/LoginPage/LoginSignUp";

function App() {
  return (
    <div className="container">
      <LoginSignUp />
      <Header />
      <Nav />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
