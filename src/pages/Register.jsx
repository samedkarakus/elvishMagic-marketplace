import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import CommonSection from "../components/ui/Common-Section/CommonSection";
import "../style/register.css";

const RegistrationPage = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("#api_url", {
        username,
        email,
        password,
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <CommonSection title="Register" />
      <section>
        <Container>
          <Row>
            <Col
              md={{ size: 6, offset: 3 }}
              className="d-flex justify-content-center"
            >
              <form
                className="align-items-center w-75 mx-auto
              "
                onSubmit={handleSubmit}
              >
                <div className="form-group d-flex flex-column">
                  <label className="mb-2" htmlFor="username">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-group d-flex flex-column">
                  <label className="mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group d-flex flex-column">
                  <label className="mb-2" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="btn__details d-flex justify-content-center">
                  <button className="register__btn d-flex align-items-center gap-2 w-50 d-flex justify-content-center mb-4 mt-3">
                    <Link to="/login">Register</Link>
                  </button>
                </div>
                <div className="have__account d-flex justify-content-center">
                  <Link to="/login">Already have an account? Login here</Link>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default RegistrationPage;
