import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view border-none text-white bg-transparent">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Somnath Roy </span>
            from <span className="purple"> Kolkata, India. </span>I am a 3rd
            year student pursuing an B.E in Power Engineering at Jadavpur
            University. Apart from coding, some other activities that I love to
            do!
          </p>
          <ul>
            <li className="list-none text-left pl-1 flex flex-row items-center space-x-1 ">
              <div>
                <ImPointRight />
              </div>
              <div> Playing Games</div>
            </li>
            <li className="list-none text-left pl-1 flex flex-row items-center space-x-1">
              <div>
                <ImPointRight />
              </div>
              <div>Writing Tech Blogs</div>
            </li>
            <li className="list-none text-left pl-1 flex flex-row items-center space-x-1">
              <div>
                <ImPointRight />
              </div>
              <div>Travelling</div>
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Somnath</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
