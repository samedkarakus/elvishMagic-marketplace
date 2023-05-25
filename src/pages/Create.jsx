import React from "react";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/ui/Common-Section/CommonSection";
import NftCard from "../components/ui/Nft-Card/NftCard";
import img from "../assets/images/platinum.webp";
import avatar from "../assets/images/gold.webp";
import "../style/create-item.css";

const item = {
  id: "04",
  title: "Platinum",
  decs: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id varius elit. Aliquam dignissim fringilla condimentum. Quisque massa justo, rutrum a magna pulvinar, pretium interdum libero. In blandit velit id mauris condimentum, eu ornare est rhoncus. Integer ullamcorper augue non sem vestibulum eleifend. Curabitur ac vulputate nulla. ",
  imgUrl: img,
  creator: "Izabella Stringer",
  creatorImg: avatar,
  currentBid: 1.87,
};

const Create = () => {
  return (
    <>
      <CommonSection title="Create NFT" />
      <section>
        <Container>
          <Row>
            <Col lg="3" md="4" sm="6">
              <h5 className="mb-4 text-light">Preview Item</h5>
              <NftCard item={item} />
            </Col>

            <Col lg="9" md="8" sm="6">
              <div className="create__item">
                <form action="">
                  <div className="form__input">
                    <label htmlFor="">Upload File</label>
                    <input
                      type="file"
                      placeholder="Browse"
                      className="upload__input"
                    />
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Price</label>
                    <input
                      type="number"
                      placeholder="Enter price for one item (ETH)"
                    />
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Minimum Bid</label>
                    <input type="number" placeholder="Enter minimum bid" />
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                    <div className="form__input w-50">
                      <label htmlFor="">Starting Date</label>
                      <input type="date" />
                    </div>

                    <div className="form__input w-50">
                      <label htmlFor="">Expiration Date</label>
                      <input type="date" />
                    </div>
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Title</label>
                    <input type="text" placeholder="Enter title" />
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Description</label>
                    <textarea
                      name=""
                      id=""
                      rows="7"
                      placeholder="Enter description"
                      className="w-100"
                    ></textarea>
                  </div>
                  <div className="btn__details d-flex justify-content-center">
                    <button className="bid__btn w-25">Upload NFT</button>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Create;
