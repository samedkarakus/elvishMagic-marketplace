import React, { useState } from "react";
import CommonSection from "../components/ui/Common-Section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import NftCard from "../components/ui/Nft-Card/NftCard";
import { NFT__DATA } from "../assets/data/data";
import "../style/market.css";

const Market = () => {
  const [data, setData] = useState(NFT__DATA);

  const handleCategory = () => {};
  const handleItems = () => {};
  const handleSort = (e) => {
    const filterValue = e.target.value;

    if (filterValue === "low") {
      const filterData = NFT__DATA.filter(
        (item) => item.currentBid >= 1 || item.currentBid < 1.5
      );
      setData(filterData);
    }

    if (filterValue === "mid") {
      const filterData = NFT__DATA.filter(
        (item) => item.currentBid >= 1.5 || item.currentBid < 2
      );
      setData(filterData);
    }

    if (filterValue === "high") {
      const filterData = NFT__DATA.filter((item) => item.currentBid >= 2);
      setData(filterData);
    }
  };

  return (
    <>
      <CommonSection title={"Marketplace"} />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <div className="market__nft__filter d-flex align-items-center justify-content-between">
                <div className="filter__left d-flex align-items-center gap-5">
                  <div className="all__category_filter">
                    <select name="" id="" onChange={handleCategory}>
                      <option value="">All Categories</option>
                      <option value="art">Art</option>
                      <option value="collectibles">Collectibles</option>
                      <option value="virtual-real-estate">
                        Virtual Real Estate
                      </option>
                      <option value="domain-names">Domain Names</option>
                      <option value="music">Music</option>
                    </select>
                  </div>

                  <div className="all__items_filter">
                    <select name="" id="" onChange={handleItems}>
                      <option value="">All Items</option>
                      <option value="single-item">Single Item</option>
                      <option value="bundle">Bundle</option>
                    </select>
                  </div>
                </div>
                <div className="filter__right">
                  <select name="" id="" onChange={handleSort}>
                    <option value="">Sort By</option>
                    <option value="high">High Rate</option>
                    <option value="mid">Mid Rate</option>
                    <option value="low">Low Rate</option>
                  </select>
                </div>
              </div>
            </Col>

            {data?.map((item) => (
              <Col lg="3" md="4" sm="6" className="mb-4" key={item.id}>
                <NftCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Market;
