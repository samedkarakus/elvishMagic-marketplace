import React from "react";
import CommonSection from "../components/ui/Common-Section/CommonSection";
import { Container, Row, Col } from "reactstrap";

const Contact = () => {
  return (
    <>
      <CommonSection>
        <section>
          <Container>
            <Row>
              <Col lg="6" md="6">
                <h2>Drop a Message</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ipsam veniam praesentium molestiae ex inventore aspernatur
                  quis impedit enim quas est.
                </p>
                <div className="contact">
                  <form action="">
                    <div className="form__input">
                      <input type="text" placeholder="Enter your name" />
                    </div>
                    <div className="form__input">
                      <input type="text" placeholder="Enter your name" />
                    </div>
                    <div className="form__input">
                      <input type="text" placeholder="Enter your name" />
                    </div>
                    <div className="form__input">
                      <input type="text" placeholder="Enter your name" />
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </CommonSection>
    </>
  );
};

export default Contact;
