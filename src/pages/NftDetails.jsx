import React, { useState } from "react";
import CommonSection from "../components/ui/Common-Section/CommonSection";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { NFT__DATA } from "../assets/data/data";
import LiveAuction from "../components/ui/Live-auction/liveAuction";
import "../style/nft-details.css";
import Modal from "../components/ui/Modal/Modal";
import { Link } from "react-router-dom";

const NftDetails = () => {
  const { id } = useParams();
  const singleNft = NFT__DATA.find((item) => item.id === id);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <CommonSection title={singleNft.title} />
      <section>
        <Container>
          <Row className="align-items-center">
            <Col lg="6" md="6" sm="6">
              <img
                src={singleNft.imgUrl}
                alt=""
                className="w-100 single__nft__img"
              />
            </Col>
            <Col lg="6" md="6" sm="6">
              <div className="single__nft__content">
                <h2 className="mb-5">{singleNft.title}</h2>

                <div className="nft__creator d-flex gap-3 align-items-center noisy">
                  <div className="creator__img">
                    <img src={singleNft.creatorImg} alt="" />
                  </div>
                  <div className="creator__details">
                    <p>Creator By</p>
                    <h6>{singleNft.creator}</h6>
                  </div>
                </div>

                <p className="my-4">{singleNft.decs}</p>
                {showModal && <Modal setShowModal={setShowModal} />}

                <button
                  class="bid__btn d-flex align-items-center gap-2 justify-content-center w-50"
                  onClick={() => setShowModal(true)}
                >
                  <i class="ri-shopping-bag-line"></i>Place Bid
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <LiveAuction />
    </>
  );
};

export default NftDetails;
