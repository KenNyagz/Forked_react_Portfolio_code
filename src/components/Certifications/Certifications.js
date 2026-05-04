import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import ProjectCard from "../Projects/ProjectCards";

import SAA from "../../Assets/Certifications/AWS_SAA.png";
import CCP from "../../Assets/Certifications/AWS_CCP.png";
import fullstack from "../../Assets/Certifications/fullstack-cert.jpg";
import KCNA from "../../Assets/Certifications/KCNA.jpg";
import CNE from "../../Assets/Certifications/cne.jpg";

const Certifications = () => {
    return (
      <Container fluid className="certifications-section">
        <Container>
          <h1 className="project-heading">
            My <strong className="purple">Certifications </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few certifications I've earned recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
                title='AWS Solutions Architect Associate'
                issuer='AWS'
                date='October 2025'
                imgPath={ SAA }
                demolink='https://www.credly.com/badges/ada01278-09c2-46d9-9fb7-854340dcb54c/public_url'
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                title='AWS Certified Cloud Practitioner'
                issuer='AWS'
                date='2025'
                imgPath={ CCP }
                demolink='https://www.credly.com/badges/648c3151-8e06-41ec-8722-1151a0e99fcc/public_url'
            />
          </Col>
            <ProjectCard
                title='Full Stack Software Engineer'
                issuer='ALX Africa and Holberton School'
                date='2023'
                imgPath={ fullstack }
                demolink='https://intranet.alxswe.com/certificates/M2pcJZmER8'
            />
            <ProjectCard
                title='Kubernetes Cloud Native Associate'
                issuer='Cloud Native Computing Foundation'
                date='2024'
                imgPath={ KCNA }
                demolink='https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/9dcc138f-2a5f-46f1-9ab1-1614fdc61f0d-kenneth-njoroge-5d509a54-8003-408a-ba31-599a5203fa0a-certificate.pdf'
            />
          <Col md={4} className="project-card">
            <ProjectCard
                title='Kubernetes Cloud Native Essentials'
                issuer='Cloud Native Computing Foundation'
                date='2024'
                imgPath={ CNE }
                demolink='https://www.credly.com/badges/7593c753-09c3-41f6-8673-558f6d2a3332'
            />
          </Col>
        </Row>
        </Container>
      </Container>
)};

export default Certifications;