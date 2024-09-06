import React from "react";
import { styled } from "styled-components";

const Text = (props) => {
  return (
    <StyledText {...props} type={props.type}>
      {props.children}
    </StyledText>
  );
};

export default Text;

const StyledText = styled.p`
  color: ${(props) => (props.type === "dark" ? "#000" : "#fff")};
  font-size: 22px;
  line-height: 37px;
  @media screen and (max-width: 1600px) {
    font-size: 20px;
    line-height: 30px;
  }
  @media screen and (max-width: 1200px) {
    font-size: 16px;
    line-height: 25px;
  }
  @media screen and (max-width: 850px) {
    font-size: 20px;
    line-height: 30px;
  }
  @media screen and (max-width: 600px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
