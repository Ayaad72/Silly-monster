import React from "react";
import styled from "styled-components";

const H2 = (props) => {
  return (
    <StyledH2 {...props} type={props.type}>
      {props.children}
    </StyledH2>
  );
};

export default H2;

const StyledH2 = styled.h2`
  font-size: 100px;
  font-weight: bold;
  color: ${(props) => (props.type === "dark" ? "#000" : "#fff")};
  line-height: 110px;
  @media screen and (max-width: 1600px) {
    font-size: 80px;
    line-height: 90px;
  }
  @media screen and (max-width: 1200px) {
    font-size: 60px;
    line-height: 70px;
  }
  @media screen and (max-width: 850px) {
    font-size: 80px;
    line-height: 90px;
  }
  @media screen and (max-width: 850px) {
    font-size: 35px;
    line-height: 40px;
  }
`;
