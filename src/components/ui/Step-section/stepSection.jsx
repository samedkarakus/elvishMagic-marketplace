import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./step-section.css";

const STEP__DATA = [
  {
    title: "Setup Your Wallet",
    desc: "Secure, user-friendly digital wallet for managing multiple cryptocurrencies and transactions.",
    icon: "ri-wallet-line",
  },
  {
    title: "Create Your Collection",
    desc: "A platform for building and organizing your personal collection of items.",
    icon: "ri-layout-masonry-line",
  },
  {
    title: "Add Your NFTs",
    desc: "A tool to easily upload and manage your unique digital collectibles",
    icon: "ri-instance-line",
  },
  {
    title: "List Them for Sale",
    desc: "It enables you to easily offer your items for purchase and showcase them to potential buyers.",
    icon: "ri-file-list-2-line",
  },
];

const stepSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-4">
            <h3 className="step__title">Create & Sell your NFTs</h3>
          </Col>

          {STEP__DATA.map((item, index) => (
            <Col lg="3" md="4" sm="6" key={index} className="mb-4">
              <div className="single__step__item h-100 noisy">
                <span>
                  <i class={item.icon}></i>
                </span>
                <div className="step__item__content">
                  <h5>
                    <Link>{item.title}</Link>
                  </h5>
                  <p className="mb-0 opacity-50">{item.desc}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default stepSection;
