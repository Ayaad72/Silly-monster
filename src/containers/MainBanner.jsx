import React, { useState, useEffect } from "react";
import Header from "./Header";
import styled from "styled-components";
import H1 from "@/components/H1";
import Image from "next/image";
import Button from "@/components/CustomButton";
import { primary_color } from "@/constants";

const MainBanner = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <React.Fragment>
      <Header />
      <StyledMainBanner>
        <PlaceholderImage
          src="https://ik.imagekit.io/3cnkjjvc1/sillymonster.io/sm_banner.png?tr=q-30"
          alt="silly-monster-placeholder"
          onLoad={() => setImageLoaded(true)}
          layout="fill"
          objectFit="cover"
        />
        <Image
          className="banner-img"
          src="https://ik.imagekit.io/3cnkjjvc1/sillymonster.io/sm_banner.png"
          alt="silly-monster"
          layout="fill"
          objectFit="cover"
          quality={100}
          onLoad={() => setImageLoaded(true)}
          style={{
            opacity: imageLoaded ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        />
        <StyledWrapper>
          <H1>Silly Monster</H1>
          <p className="main-para">
            Rare NFT collection of 1010 piece distinctively adorable 3D rendered
            creatures.
          </p>
          <a
            href="https://opensea.io/collection/the-silly-monster/overview"
            target="_blank"
          >
            <Button className="banner-btn" color={primary_color}>
              Mint on OpenSea
            </Button>
          </a>
        </StyledWrapper>
      </StyledMainBanner>
    </React.Fragment>
  );
};

export default MainBanner;

const StyledMainBanner = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: end;
  justify-content: center;
  .banner-img {
    position: relative;
    width: 100%;
    height: auto;
    max-height: 100vh;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    overflow: hidden;
  }
`;

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  width: 60%;
  text-align: center;
  margin-bottom: 5rem;
  @media screen and (max-width: 1000px) {
    width: 75%;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 0 10px;
    gap: 1.5rem;
  }
  .main-para {
    font-size: 40px;
    color: #fff;
    @media screen and (max-width: 1000px) {
      font-size: 30px;
    }
    @media screen and (max-width: 600px) {
      font-size: 26px;
    }
  }
  .banner-btn {
    width: 30%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    @media screen and (max-width: 1000px) {
      width: 40%;
    }
    @media screen and (max-width: 600px) {
      width: 60%;
    }
  }
`;
const PlaceholderImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
