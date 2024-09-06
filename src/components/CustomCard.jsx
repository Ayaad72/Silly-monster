import React from "react";
import { gray_color, primary_color } from "@/constants";
import styled from "styled-components";
import H2 from "./H2";
import Text from "./Text";

const CustomCard = (props) => {
  return (
    <StyledCustomCard>
      <div className="number-wrapper">{props.number}</div>
      <div className="card-wrapper">
        <H2 className="custom-title" type="dark">
          {props.title}
        </H2>

        <Text className="custom-text" type="dark">
          {props.details}
        </Text>
      </div>
    </StyledCustomCard>
  );
};

export default CustomCard;

const StyledCustomCard = styled.div`
  width: 516px;
  height: 698px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem;
  background: ${gray_color};
  border-radius: 50px;
  @media screen and (max-width: 850px) {
    height: auto;
    gap: 1rem;
    padding: 4rem 3rem;
  }
  @media screen and (max-width: 600px) {
    height: auto;
    gap: 1rem;
    padding: 0 2rem;
    height: 220px;
    padding-top: 2rem;
    justify-content: center;
  }
  .number-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    background: ${primary_color};
    font-size: 40px;
    border-radius: 50%;
    @media screen and (max-width: 850px) {
      font-size: 30px;
    }
    @media screen and (max-width: 600px) {
      width: 47px;
      height: 47px;
      font-size: 20px;
    }
  }
  .card-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: start;
    height: 65%;
    gap: 4rem;

    .custom-text {
      line-height: 30px;
      @media screen and (max-width: 600px) {
        line-height: 22px !important;
      }
    }

    .custom-title {
      font-weight: 400;
      font-size: 72px;
      @media screen and (max-width: 850px) {
        position: absolute;
        top: -6rem;
        left: 8rem;
        font-size: 45px;
      }
      @media screen and (max-width: 600px) {
        position: absolute;
        top: -3.5rem;
        left: 5rem;
        font-size: 28px;
      }
    }
  }
`;
