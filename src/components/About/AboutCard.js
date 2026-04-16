import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Greetings, My name is <span className="purple">Kenneth Njoroge </span>
            from <span className="purple"> Nairobi, Kenya.</span>
            <br />
            I am currently employed as a software developer at Colour International.
            <br />
            I am a skilled software engineer with certifications in cloud technologies such as AWS, GCP
            and Kubernetes
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Technical reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to be slightly better than you were yesterday everyday!"{" "}
          </p>
          <footer className="blockquote-footer">Ken Nyaga</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
