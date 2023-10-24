import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import health from "../../Assets/Projects/health.png";
import marketplace from "../../Assets/Projects/marketplace.png";
import testingg from "../../Assets/Projects/testingg.png";
import robot from "../../Assets/Projects/robot.png";
import digit from "../../Assets/Projects/digit.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={health}
              isBlog={false}
              title="Health Club Membership Management"
              description="Developed a Gym Management System, using React and NodeJS increasing gym operational efficiency by 20%. Attained 98% user satisfaction via real-time AWS and MongoDB analytics for data management."
              ghLink="https://github.com/ilyas122/Health-Club-Membership-Management"
              demoLink="https://gym-management-frontend-pi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={marketplace}
              isBlog={false}
              title="Cross Domain Enterprise Online Marketplace"
              description="Marketplace consists of various businesses under one roof to reduce search time and to provide numerous options of businesses to the users. Built using: HTML, CSS, PHP, MySQL, LAMP stack."
              ghLink="https://github.com/ilyas122/Cross-Domain-Enterprise-Online-Marketplace"
              demoLink="https://www.youtube.com/watch?v=nUfel0acQ5Q&ab_channel=MohammedIlyasAhmed"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={testingg}
              isBlog={false}
              title="Software QA Testing for Mobile Applications"
              description="Led cross-functional team, evaluated 4 AI food recognition apps, achieved 82% pass rate in 200 test cases. Documented 27 critical bugs, improving app accuracy under diverse conditions and improved its accuracy."
              ghLink="https://github.com/ilyas122/Software-QA-Testing-for-Mobile-Applications"
              demoLink="https://www.youtube.com/watch?v=HvjHvSrsNSE&ab_channel=MohammedIlyasAhmed"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={robot}
              isBlog={false}
              title="Robot Management System"
              description="Enhanced user engagement by 35% via an intuitive user dashboard for robot selection and simulation. Reduced downtime by 20% using AWS CloudWatch for real-time AWS Robomaker monitoring."
              ghLink="https://github.com/ilyas122/Robot-Management-System"
              
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={digit}
              isBlog={false}
              title="Handwritten Digits Recognition using ML"
              description="Utilized SVM and CNN to achieve a global accuracy of 93.043% for classifying Handwritten Digits. Trained a model for banks and postal services using the MNIST dataset with 70,000 handwritten digits."
                ghLink="https://github.com/ilyas122/Recognition-of-Handwritten-Digits-Using-Support-Vector-Machine-and-Neural-Networks-"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
