import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import Particle from "../Others/Particle";

import shoppingCart from "../../Assets/Projects/Project5.png";
import WeatherApp from "../../Assets/Projects/Project4.png";
import RazorPayClone from "../../Assets/Projects/project3.png";
import PasswordGenerator from "../../Assets/Projects/Project2.png";
import skillTeach from "../../Assets/Projects/Project1.png";
import medicare from "../../Assets/Projects/Medicare.png";
import "./Projects.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="pt-20 text-white">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p className=" text-purple-300">
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={skillTeach}
              isBlog={false}
              title="Skill Teach - A Edtech Platform"
              description="Skill Teach is a fully functional ed-tech platform that enables users to create, consume, and rate educational content. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS "
              ghLink="https://skill-teach-somnath-roy.vercel.app/"
              demoLink="https://skill-teach-somnath-roy.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={medicare}
              isBlog={false}
              title="Medicare - A Healthcare Platform"
              description="Medi-Care is a web-based healthcare application that provides comprehensive medical support, including doctor appointment booking, online video-calling doctor consultations, blood donation coordination, AI-powered health assistance, and emergency medical aid."
              ghLink="https://github.com/SomnathRoy-JU25/Medi-Care"
              demoLink="https://medicare-app-somnath-roy.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={RazorPayClone}
              isBlog={false}
              title="Save Memories"
              description="Designed and implemented a simple social media application allowing users to post and share significant life
events, showcasing strong problem-solving skills and attention to user experience. "
              ghLink="https://save-memories-app.vercel.app/"
              demoLink="https://save-memories-app.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={WeatherApp}
              isBlog={false}
              title="Weather-App"
              description="A Weather App from where you can know about the Weather of your locality and other places "
              ghLink="https://mrsomnathroy.github.io/Weather-App/"
              demoLink="https://mrsomnathroy.github.io/Weather-App/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={PasswordGenerator}
              isBlog={false}
              title="Password Generator"
              description="Developed a dynamic and user-friendly website utilizing HTML, CSS, and JavaScript to generate secure and unique passwords on demand "
              ghLink="https://mrsomnathroy.github.io/Password-Generator/"
              demoLink="https://mrsomnathroy.github.io/Password-Generator/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={shoppingCart}
              isBlog={false}
              title="Shopping Card"
              description="I designed and developed a user-friendly e-commerce website
              using React and Tailwind CSS, integrated API data for product
              listings, implemented an intuitive cart system with add-to-cart and
              remove-from-cart features, showcasing my skills in responsive
              design, state management, and front-end development."
              ghLink="https://sr-shopping-cart.netlify.app/"
              demoLink="https://sr-shopping-cart.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
