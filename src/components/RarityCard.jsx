import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Text from "@/components/Text";

function RarityCard(props) {
  return (
    <StyledRarituyCard>
      <Image
        className="card-img"
        src={props.src}
        alt="logo-1"
        width={100}
        height={67}
      />
      <Text className="rarity-card-text">{props.title}</Text>
    </StyledRarituyCard>
  );
}

export default RarityCard;

const StyledRarituyCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  width: 30%;
  height: 172px;
  background: #1f2123;
  border-radius: 100px;
  @media screen and (max-width: 1600px) {
    width: 25%;
    gap: 2rem;
    height: 142px;
  }
  @media screen and (max-width: 1200px) {
    gap: 1rem;
    height: 122px;
  }
  @media screen and (max-width: 1000px) {
    gap: 1rem;
    height: 90px;
  }
  @media screen and (max-width: 850px) {
    gap: 8px;
    width: 25%;
    height: 60px;
  }
  @media screen and (max-width: 850px) {
    gap: 4px;
    width: 25%;
    height: 60px;
  }
  @media screen and (max-width: 500px) {
    gap: 6px;
    width: 30%;
    height: 50px;
    margin: 0 !important;
  }
  .rarity-card-text {
    font-size: 36px;
    @media screen and (max-width: 1600px) {
      font-size: 25px;
    }
    @media screen and (max-width: 1000px) {
      font-size: 16px;
    }
    @media screen and (max-width: 600px) {
      font-size: 14px;
    }
    @media screen and (max-width: 430px) {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 1600px) {
    margin: 0 20px;
  }
  @media screen and (max-width: 850px) {
    font-size: 26px;
  }
  .card-img {
    @media screen and (max-width: 1600px) {
      width: 50px;
      height: 50px;
    }
    @media screen and (max-width: 1200px) {
      width: 30px;
      height: 30px;
    }
    @media screen and (max-width: 850px) {
      width: 20px;
      height: 20px;
    }
    @media screen and (max-width: 430px) {
      width: 15px;
      height: 15px;
    }
  }
`;
