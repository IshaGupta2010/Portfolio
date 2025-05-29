import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Isha Gupta </span>
            from <span className="purple"> Lucknow, India.</span>
            <br />
            I am currently searching for an interesting opportunity for gaining hands-on experience on my skill set.
            <br />
            I have completed my Bachelor's degree (B.Tech) in Computer Science and Engineering at BBDU,
            Lucknow.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading fiction
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning distinctly
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Isha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
