import Section from "./components/Section";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import "./style.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Container fluid className=" home-section p-0" id="home">
        <NavBar />
        <Section />
      </Container>
      <Footer />
    </>
  );
}

export default App;
