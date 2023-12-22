import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function About() {
  return (
    <>
      <footer>
        <Container fluid="lg">
          <Row className="align-items-center justify-content-center">
            <Col xl={7} md={8} sm={12}>
              <p className="mb-0">
                COPYRIGHT © 2022{" "}
                <Link to="/dashboard" className="link-text">
                  Harsh
                </Link>
                , All rights Reserved
              </p>
            </Col>
            <Col xl={5} md={4} sm={12}>
              <ul className="ps-0">
                <li>
                  <Link to="/dashboard">
                    <FaFacebookF size="15" />
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard">
                    <FaInstagram size="15" />
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard">
                    <FaTwitter size="15" />
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard">
                    <FaLinkedinIn size="15" />
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default About;
