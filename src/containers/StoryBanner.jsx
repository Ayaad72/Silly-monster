import React, { useState, useEffect } from "react";
import Button from "@/components/CustomButton";
import H2 from "@/components/H2";
import Text from "@/components/Text";
import { content_width, primary_color } from "@/constants";
import Image from "next/image";
import styled, { keyframes } from "styled-components";

const StoryBanner = () => {
  const [rotation, setRotation] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > prevScrollY ? "down" : "up";

      if (scrollDirection === "down") {
        setRotation(rotation - 5);
      } else {
        setRotation(rotation + 5);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [rotation, prevScrollY]);
  return (
    <StyledStoryBanner id="about-section">
      <div className="content-wrapper">
        <H2 type="dark">
          Silly Monster <br /> Story
        </H2>
        <Text type="dark">
          Silly Monster is an NFT drop of adorable monster characters created by
          BullLabs. This unique NFT drop on Opensea celebrates the power of
          imagination, and the joy of owning an NFT collection.
        </Text>
        <Text type="dark">
          The Silly Monster project is poised to grow into a global community of
          like-minded people who share a passion for creativity and fully
          embrace the possibilities of web3 technology.
        </Text>
        <a
          href="https://opensea.io/collection/the-silly-monster/overview"
          target="_blank"
        >
          <Button className="story-btn" color={primary_color}>
            Get Yours Now
          </Button>
        </a>
      </div>
      <div className="gif-wrapper">
        <p className="gif-text">
          Mint and be a part of the <br /> exclusive club.
        </p>
        <StyledImage
          src="/story-logo.svg"
          alt="silly-monster"
          width={287}
          height={287}
          rotation={rotation}
        />
        <Image
          className="story-img"
          src="/story.gif"
          alt="silly-monster"
          width={736}
          height={736}
        />
        {/* <div className="bid-wrapper">
          <div className="bid-left-wrapper">
            <p>Current Bid</p>
            <br />
            <div className="rate-wrapper">
              <Image
                className="ethereum-img"
                src="/ethereum-icon.svg"
                alt="ethereum"
                width={21}
                height={35}
              />
              <div className="rate-text">0.25 ETH</div>
            </div>
          </div>
          <div className="bid-left-wrapper">
            <p>Ends in</p>
            <br />
            <div className="rate-wrapper">
              <div className="rate-text">12h 43m 42s</div>
            </div>
          </div>
        </div> */}
      </div>
    </StyledStoryBanner>
  );
};

export default StoryBanner;

const StyledStoryBanner = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${content_width};
  margin: 0 auto;
  padding: 8rem 0 8rem 0;
  @media screen and (max-width: 1600px) {
    width: 100%;
    padding: 5rem 20px;
  }
  @media screen and (max-width: 850px) {
    flex-direction: column;
    gap: 4rem;
  }
  .content-wrapper {
    width: 46%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
    @media screen and (max-width: 1600px) {
      gap: 2rem;
    }
    @media screen and (max-width: 1200px) {
      width: 40%;
      gap: 1rem;
    }
    @media screen and (max-width: 1000px) {
      width: 50%;
      gap: 1rem;
    }
    @media screen and (max-width: 850px) {
      width: 100%;
      gap: 2rem;
    }
  }
  .gif-wrapper {
    position: relative;
  }
  .story-btn {
    width: 30%;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 1600px) {
      width: 40%;
    }
    @media screen and (max-width: 1200px) {
      width: 50%;
    }
  }
  .story-img {
    border-radius: 50px;
    @media screen and (max-width: 1600px) {
      width: 600px;
      height: 600px;
    }
    @media screen and (max-width: 1200px) {
      width: 500px;
      height: 500px;
    }
    @media screen and (max-width: 1000px) {
      width: 450px;
      height: 450px;
    }
    @media screen and (max-width: 900px) {
      width: 400px;
      height: 400px;
    }
    @media screen and (max-width: 850px) {
      width: 100%;
      height: auto;
    }
  }

  .gif-text {
    position: absolute;
    top: 4%;
    left: 6%;
    color: #fff;
    font-size: 28px;
    @media screen and (max-width: 1000px) {
      font-size: 20px;
    }
  }
  .bid-wrapper {
    position: absolute;
    bottom: 6%;
    left: 12%;
    width: 574px;
    height: 121px;
    border-radius: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.5);
    @media screen and (max-width: 1600px) {
      display: none;
    }
    .bid-left-wrapper {
      p {
        color: #fff;
        font-size: 12px;
      }
      .rate-wrapper {
        display: flex;
        align-items: center;
        gap: 1rem;
        .rate-text {
          color: #fff;
          font-size: 16px;
        }
      }
    }
  }
`;

const StyledImage = styled(Image)`
  position: absolute;
  left: -20%;
  z-index: 2;
  top: 32%;
  transform: rotate(${(props) => props.rotation}deg);
  transition: transform 0.1s ease;
  @media screen and (max-width: 1200px) {
    width: 200px;
    height: 200px;
    left: -23%;
    top: 30%;
  }
  @media screen and (max-width: 1000px) {
    width: 200px;
    height: 200px;
    left: -23%;
    top: 22%;
  }
  @media screen and (max-width: 850px) {
    width: 300px;
    height: 300px;
    left: 50%;
    top: -30%;
  }
  @media screen and (max-width: 600px) {
    width: 200px;
    height: 200px;
    left: 55%;
    top: -35%;
  }
`;
