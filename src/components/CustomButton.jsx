import React from "react";
import styled from "styled-components";
const Button = (props) => {
  return (
    <StyledButton {...props} color={props.color} type={props.type}>
      {props.children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  height: 60px;
  background-color: ${(props) => props.color || "#000"};
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;
  font-weight: 400;
  transition: background-color 0.3s ease;
  color: ${(props) => (props.type === "dark" ? "#fff" : "#000")};
  border: ${(props) => (props.type === "dark" ? "1px solid #fff" : "none")};

  &:focus {
    outline: none;
  }
  @media screen and (max-width: 1200px) {
    font-size: 16px;
  }
`;
