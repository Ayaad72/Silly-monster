import React, { useState, useEffect } from "react";
import H2 from "@/components/H2";
import Text from "@/components/Text";
import RarityCard from "@/components/RarityCard";
import styled from "styled-components";
import Image from "next/image";
import { content_width } from "@/constants";
import Marquee from "react-fast-marquee";

const imagesFirstList = Array.from({ length: 50 }, (_, index) => {
  const imageUrl = `https://ik.imagekit.io/q2ycoalvqm/Silly%20Monster/Silly%20Monster%20_${
    index + 1
  }.jpeg`;
  return imageUrl;
});
const imagesSecondList = Array.from({ length: 50 }, (_, index) => {
  const imageUrl = `https://ik.imagekit.io/q2ycoalvqm/Silly%20Monster/Silly%20Monster%20_${
    index + 51
  }.jpeg`;
  return imageUrl;
});
const imagesThirdList = Array.from({ length: 50 }, (_, index) => {
  const imageUrl = `https://ik.imagekit.io/q2ycoalvqm/Silly%20Monster/Silly%20Monster%20_${
    index + 101
  }.jpeg`;
  return imageUrl;
});
const RarityBanner = () => {
  const [showIconOnMob, setShowIconOnMob] = useState(false);

  useEffect(() => {
    setShowIconOnMob(window.innerWidth >= 1024);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setShowIconOnMob(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <StyledRarityBanner id="rarity-section">
      <div className="rarity-wrapper">
        <H2>Rarity</H2>
        <Text className="rarity-text">
          Each NFT is algorithmically generated by combining multipe unique
          traits across different categories. There are only 31 legendary and
          135 rare NFTs available for grabs.
        </Text>
      </div>
      <div className="cards-wrapper">
        {[
          {
            title: "Common",
            src: showIconOnMob ? "/r-icon-1.svg" : "/r-icon-1.png",
          },
          {
            title: "Rare",
            src: showIconOnMob ? "/r-icon-2.svg" : "/r-icon-2.png",
          },
          {
            title: "Legendary",
            src: showIconOnMob ? "/r-icon-3.svg" : "/r-icon-3.png",
          },
        ].map((item, index) => (
          <RarityCard key={index} src={item.src} title={item.title} />
        ))}
      </div>
      <Marquee className="monster-marquee" loop={0} speed={40}>
        {imagesFirstList.map((item, index) => (
          <div className="image-wrapper" key={index}>
            <img
              className="monster-img"
              src={`${item}?tr=q-30`}
              alt={`silly-monster-${index + 1}`}
              width={388}
              height={387}
            />
          </div>
        ))}
      </Marquee>
      <Marquee
        className="monster-marquee"
        direction="right"
        loop={0}
        speed={40}
      >
        {imagesSecondList.map((item, index) => (
          <div className="image-wrapper" key={index}>
            <Image
              className="monster-img"
              src={`${item}?tr=q-30`}
              alt={`silly-monster-${index + 1}`}
              width={388}
              height={387}
            />
          </div>
        ))}
      </Marquee>
      <Marquee className="monster-marquee">
        {imagesThirdList.map((item, index) => (
          <div className="image-wrapper" key={index} loop={0} speed={40}>
            <Image
              className="monster-img"
              src={`${item}?tr=q-30`}
              alt={`silly-monster-${index + 1}`}
              width={388}
              height={387}
            />
          </div>
        ))}
      </Marquee>
    </StyledRarityBanner>
  );
};

export default RarityBanner;

const StyledRarityBanner = styled.div`
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 71%,
    rgba(255, 255, 255, 1) 100%
  );
  border-radius: 50px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  margin-top: 5rem;
  .rarity-wrapper {
    width: ${content_width};
    display: flex;
    align-items: center;
    padding: 6rem 0;
    margin: 0 auto;
    @media screen and (max-width: 850px) {
      margin: 0 20px;
      padding: 3rem 0;
    }
    .rarity-text {
      width: 50%;
      padding-left: 8rem;
      @media screen and (max-width: 1000px) {
        width: 40%;
        font-size: 16px;
        padding-left: 3rem;
      }
      @media screen and (max-width: 850px) {
        width: 40%;
        font-size: 16px;
        padding-left: 2rem;
      }
      @media screen and (max-width: 600px) {
        width: 20%;
        font-size: 14px;
        padding-left: 1rem;
      }
      @media screen and (max-width: 430px) {
        width: 15%;
        font-size: 14px;
        padding-left: 1rem;
      }
    }
  }
  .cards-wrapper {
    display: flex;
    gap: 1rem;
    width: ${content_width};
    margin: 0 auto;
    margin-bottom: 6rem;
    justify-content: space-between;
    @media screen and (max-width: 1600px) {
      width: 100%;
      padding: 0 20px;
      justify-content: center;
    }
    @media screen and (max-width: 850px) {
      gap: 4px;
      margin-bottom: 3rem;
    }
    @media screen and (max-width: 600px) {
      gap: 10px;
      margin-bottom: 2rem;
    }
  }
  .monster-marquee {
    .rfm-initial-child-container {
      display: flex;
    }
  }
  .image-wrapper {
    margin: 1rem;
    @media screen and (max-width: 850px) {
      margin: 0.5rem;
    }
    @media screen and (max-width: 600px) {
      margin: 0.3rem;
    }
    .monster-img {
      border-radius: 30px;
      @media screen and (max-width: 850px) {
        width: 200px;
        height: 199px;
        border-radius: 20px;
      }
      @media screen and (max-width: 850px) {
        width: 150px;
        height: 149px;
        border-radius: 20px;
      }
    }
  }
`;