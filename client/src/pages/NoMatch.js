import React from "react";
import Container from "../Components/Container";
import Row from "../Components/Row";
import Col from "../Components/Col";
import Jumbotron from "../Components/Jumbotron";

const NoMatch = () => {
  return (
    <Container>
      <Row>
        <Col size="md-12">
          <Jumbotron>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;