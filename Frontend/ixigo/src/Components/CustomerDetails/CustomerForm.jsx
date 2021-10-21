import React from "react";
import "./Customer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import InputGroup from "react-bootstrap/InputGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import FormControl from "react-bootstrap/FormControl";
function CustomerForm() {
  return (
    <Container fluid>
      <Row>
        <Col xs={9}>
          <Container fluid className="card">
            <Row>
              <Col xs={8}>
                <Container fluid>
                  <Row>
                    <Col xs={3}>
                      <Stack direction="horizontal" gap={1}>
                        <div className="bg-light border">
                          <img
                            src="https://images.ixigo.com/img/common-resources/airline-new/G8.png"
                            alt=""
                            style={{ height: "40px", width: "40px" }}
                          />
                        </div>
                        <div className="bg-light border">iefine</div>
                      </Stack>
                    </Col>
                    <Col xs={2}>second</Col>
                    <Col xs={2}>third</Col>
                    <Col xs={2}>fourth</Col>
                    <Col xs={3}>fifth</Col>
                  </Row>
                </Container>
              </Col>
              <Col xs={4}>
                <Stack direction="horizontal">
                  <div className="">+91-7346738373 safiurrahaman799</div>
                  <div className=" ms-auto">MODIFY</div>
                </Stack>
              </Col>
            </Row>
          </Container>
          <Container fluid className="card" style={{ marginTop: "2rem" }}>
            <Row>
              <Stack direction="horizontal">
                <div className="">Enter travellers details</div>
                <div className=" ms-auto">1 travellers</div>
              </Stack>
            </Row>
            <Row>
              <Col xs={9}>
                <Container fluid>
                  <Row>Adult</Row>
                  <Row>Name</Row>
                  <Row>
                    <Col xs={3}>
                      <InputGroup className="mb-3">
                        <DropdownButton
                          variant="outline-secondary"
                          title="Dropdown"
                          id="input-group-dropdown-1"
                        >
                          <Dropdown.Item href="#">Mr</Dropdown.Item>
                          <Dropdown.Item href="#">Mrs</Dropdown.Item>
                          <Dropdown.Item href="#">Mss</Dropdown.Item>
                        </DropdownButton>
                        <FormControl aria-label="Text input with dropdown button" />
                      </InputGroup>
                    </Col>
                    <Col xs={4}>first</Col>
                    <Col xs={4}>second</Col>
                  </Row>
                </Container>
              </Col>
              <Col xs={3}>Travellers List</Col>
            </Row>
          </Container>
        </Col>

        <Col xs={3}>right</Col>
      </Row>
    </Container>
  );
}

export default CustomerForm;
