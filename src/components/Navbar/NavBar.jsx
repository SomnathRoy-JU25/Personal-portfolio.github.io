import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../../Assets/SR-logos_white.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import { RiContactsLine } from "react-icons/ri";

import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import "./style.css";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
          {/* <div className="logo-text">omnath Roy</div> */}
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <div className="flex flex-row p-0 space-x-1.5 items-center">
                  <div>
                    <AiOutlineHome style={{ marginBottom: "2px" }} />{" "}
                  </div>
                  <div> Home</div>
                </div>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <div className="flex flex-row p-0 space-x-1.5 items-center">
                  <div>
                    <AiOutlineUser style={{ marginBottom: "2px" }} />
                  </div>
                  <div>About</div>
                </div>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <div className="flex flex-row p-0 space-x-1.5 items-center">
                  <div>
                    {" "}
                    <AiOutlineFundProjectionScreen
                      style={{ marginBottom: "2px" }}
                    />{" "}
                  </div>
                  <div> Projects</div>
                </div>
              </Nav.Link>
            </Nav.Item>
           
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <div className="flex flex-row p-0 space-x-1.5 items-center">
                  <div>
                    <CgFileDocument style={{ marginBottom: "2px" }} />
                  </div>
                  <div> Resume </div>
                </div>
              </Nav.Link>
            </Nav.Item>
             
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contactUs"
                onClick={() => updateExpanded(false)}
              >
                <div className="flex flex-row p-0 space-x-1.5 items-center">
                  <div>
                    {" "}
                    <RiContactsLine 
                      style={{ marginBottom: "2px" }}
                    />{" "}
                  </div>
                  <div> Contact Us</div>
                </div>
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link href="https://skill-teach-somnath-roy.vercel.app/" target="_blank" rel="noreferrer">
                <div className="flex flex-row p-0 space-x-1.5 items-center">
                  <div>
                    <ImBlog style={{ marginBottom: "2px" }} />
                  </div>
                  <div>Skill Teach</div>
                </div>
              </Nav.Link>
            </Nav.Item> */}

            <Nav.Item className="fork-btn">
              <Button
                href=""
                target="_blank"
                className="fork-btn-inner"
              >
                <div className="flex flex-row p-0 space-x-1.5 items-center">
                  <div>
                    <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                  </div>
                  <div>
                    <AiFillStar style={{ fontSize: "1.1em" }} />
                  </div>
                </div>
              </Button>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
