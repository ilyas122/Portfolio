import React from "react";
import { Container, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGoogleCircle } from 'react-icons/ai';

const ContactMe = () => {
  return (
    <Container fluid className="about-section" id="contact" style={{ marginBottom: "320px" }}>
      <Container className="home-about-section"> {/* Apply the class here */}
        <Col md={12} className="home-about-social">
          <h1>CONTACT ME</h1>
          <p>
            Feel free to <span className="purple">connect</span> with me
          </p>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/ilyas-ah/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/ilyas122"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:mohammedilyasahmed@sjsu.edu"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillGoogleCircle />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/_ilyas.ahmed_/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Container>
    </Container>
  );
};

export default ContactMe;
