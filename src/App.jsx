import Section from "./components/Section";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import "./style.css";

function App() {
  return (
    <Container fluid className=" home-section p-0" id="home">
      <NavBar />
      <Section />
    </Container>
  );
}

export default App;
