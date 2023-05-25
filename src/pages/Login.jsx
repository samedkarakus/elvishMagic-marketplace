import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import CommonSection from "../components/ui/Common-Section/CommonSection";
import "../style/login.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("#api_url", {
        email,
        password,
      });

      // Handle the response, e.g., store the authentication token in local storage
      console.log(response.data);
    } catch (error) {
      // Handle the error, e.g., show an error message
      console.log(error);
    }
  };

  return (
    <>
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col md={{ size: 6, offset: 3 }}>
              <form
                onSubmit={handleSubmit}
                className="align-items-center w-75 mx-auto"
              >
                <div className="form-group d-flex flex-column">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group d-flex flex-column">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="btn__details d-flex justify-content-center">
                  <button className="register__btn d-flex align-items-center gap-2 w-50 d-flex justify-content-center mb-4 mt-3">
                    <Link to="/home">Login</Link>
                  </button>
                </div>
                <div className="have__account d-flex justify-content-center">
                  <Link to="/register">Need an account? Register here</Link>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default LoginPage;
