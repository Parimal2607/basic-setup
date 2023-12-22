import React from "react";
import { Container } from "reactstrap";
import { Helmet } from "react-helmet";

function Error() {
  return (
    <>
      <Helmet>
        <title>React - Error</title>
      </Helmet>
      <Container fluid="lg">
        <div className="d-flex align-items-center justify-content-center flex-column">
          <h2>Page not found</h2>
          <h1 className="mb-0">404</h1>
        </div>
      </Container>
    </>
  );
}

export default Error;
