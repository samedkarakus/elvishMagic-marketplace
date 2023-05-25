import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./hero-section.css";
import heroImg from "../../assets/images/hero.webp";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  return (
    <section className="hero__section">
      <Container>
        <Row className="align-items-center">
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2>
                <Typewriter
                  options={{ autoStart: true, loop: true }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Unlock the Unseen")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Digital Art, Real Value")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Art Made Tokenized")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Own Digital Originals")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Unique. Rare. Yours.")
                      .start();
                  }}
                />
                Uncover Rare Digital Art and Embrace Extraordinary NFTs
              </h2>

              <p>
                Journey into the World of Infinite Creativity and Unparalleled
                Digital Ownership
              </p>
              <div className="hero__btns d-flex align-items-center gap-4">
                <button className="explore__btn d-flex align-items-center gap-2 w-25 d-flex justify-content-center">
                  <Link to="/market">Explore</Link>
                </button>
                <button className="create__btn d-flex align-items-center gap-2 w-25 d-flex justify-content-center">
                  <Link to="/create">Create</Link>
                </button>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="hero__img">
              <img src={heroImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
