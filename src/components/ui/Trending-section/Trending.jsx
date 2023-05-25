import React from "react";
import "./trending.css";
import { Container, Row, Col } from "reactstrap";
import { NFT__DATA } from "../../../assets/data/data";
import NftCard from "../Nft-Card/NftCard";

const Trending = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="trending__title">
              <h3>Trending</h3>
            </div>
          </Col>

          {NFT__DATA.slice(0, 8).map((item) => (
            <Col lg="3" md="4" sm="6" key={item.id} className="mb-4">
              <NftCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Trending;
