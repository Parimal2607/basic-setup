import React from "react";
import { Container } from "reactstrap";
import { Helmet } from "react-helmet";

function About() {
  return (
    <>
      <Helmet>
        <title>React - About</title>
      </Helmet>
      <Container fluid="lg">
        <div className="d-flex align-items-center justify-content-center">
          <h2 className="mb-0">About section</h2>
        </div>
      </Container>
    </>
  );
}

export default About;
