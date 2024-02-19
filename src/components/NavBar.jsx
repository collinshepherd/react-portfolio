import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import Container from "react-bootstrap/Container";
import {
  AiFillStar,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {

  return (
    <Navbar
      className={"navbar"}
    >
      <Container>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              
            <NavLink
                to= "/"
                style={({ isActive, isPending, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isPending ? "red" : "black",
                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </NavLink>
              
            </Nav.Item>

            <Nav.Item>
            <NavLink
                to= "/portfolio"
                style={({ isActive, isPending, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isPending ? "red" : "black",
                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                >
                <AiFillStar style={{ marginBottom: "2px" }} /> Portfolio
              </NavLink>
            </Nav.Item>

            <Nav.Item>
            <NavLink
                to= "/project"
                style={({ isActive, isPending, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isPending ? "red" : "black",
                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                >
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projects
              </NavLink>
            </Nav.Item>

            <Nav.Item>
                        <NavLink
                to= "/resume"
                style={({ isActive, isPending, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isPending ? "red" : "black",
                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </NavLink>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;