import React, { useState } from "react";
import styled from "styled-components";
import Text from "./Text";
import Image from "next/image";

const CustomCollapse = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionWrapper {...props}>
      <AccordionTitle onClick={toggleAccordion}>
        <Text className="title-text" type="dark">
          {props.title}
        </Text>
        <RotateImage
          src="/arrow-up.svg"
          alt="arrow-up"
          width={20}
          height={20}
          isOpen={isOpen}
        />
      </AccordionTitle>
      <AccordionContent className={isOpen ? "open" : ""}>
        <Text type="dark" className="collapse-text">
          {props.content}
        </Text>
      </AccordionContent>
    </AccordionWrapper>
  );
};

export default CustomCollapse;

const AccordionWrapper = styled.div`
  margin: 10px 0;
  border-radius: 40px;
  overflow: hidden;
  padding: 2rem;
  background-color: #e7e7e7;
  @media screen and (max-width: 600px) {
    border-radius: 20px;
    padding: 1rem;
  }
`;

const AccordionTitle = styled.div`
  padding: 15px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    background-color: #e7e7e7;
  }
  .title-text {
    font-weight: bold;
    @media screen and (max-width: 850px) {
      width: 85%;
    }
  }
`;

const AccordionContent = styled.div`
  padding: 15px;
  display: none;
  &.open {
    display: block;
  }
  .collapse-text {
    font-weight: 400;
  }
`;

const RotateImage = styled(Image)`
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0)")};
`;
