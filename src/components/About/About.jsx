import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Others/Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import AboutCard from "../About/AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import "./style.css";
function About() {
  return (
    <Container
      fluid
      className="relative pt-250 pb-30 bg-section-background-color text-white"
    >
      <Particle />
      <Container>
        <Row className="flex justify-center p-20">
          <Col md={15} className="flex justify-center pt-30 pb-50">
            <h1 className="text-2.1xl pb-20">
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <AboutCard />
          </Col>
          <Col md={5} className="about-img lg:pt-0 pt-120 pb-50">
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="text-white text-2.3xl font-medium pt-10">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="text-white text-2.3xl font-medium pt-10">
          <strong className="purple">Tools</strong> I use
        </h1>

        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
