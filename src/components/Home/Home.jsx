import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "../../Assets/Home1.webp";
import homeLogo from "../../Assets/Home.png";
import Particle from "../Others/Particle";
import Home2 from "./Home2";
import Type from "./Type";
import "./styles.css";

function Home() {
  return (
    <section>
      <Container
        fluid
        className=" home-section  relative z-[-1] bg-gradient-to-b from-transparent via-transparent to-transparent 
      bg-image-gradient bg-cover bg-center pt-30 pb-30"
        id="home"
      >
        <Particle />
        <Container className="pt-36 pb-8 text-white text-left">
          <Row>
            <Col md={7} className="pt-20">
              <h1 className="text-4xl pl-12 pb-3">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="text-5xl pl-10">
                I'M
                <strong className="text-fuchsia-500 text-5xl">
                  {" "}
                  Somnath Roy
                </strong>
              </h1>

              <div className="p-10 text-left">
                <Type />
              </div>
            </Col>

            <Col className="md:px-5 pb-20">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid max-h-450"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
