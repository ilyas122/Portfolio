import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohammed Ilyas Ahmed</span> from <span className="purple">San Jose, California.</span>
            <br /> Currently, I'm pursuing my master's in <span className="purple">Software Engineering</span> at <span className="purple">San Jose State University</span>
            <br />
            I have worked as a Associate software developer at <span className="purple">Tata Consultancy Services.</span>
            <br />
            <br />
            Besides coding, I have a passion for various activities.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Embrace the future with technology!"{" "}
          </p>
          <footer className="blockquote-footer">Not by ME</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
