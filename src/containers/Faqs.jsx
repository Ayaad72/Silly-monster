import React from "react";
import CustomCollapse from "@/components/CustomCollapse";
import styled from "styled-components";
import { content_width } from "@/constants";
import H2 from "@/components/H2";

const Faqs = () => {
  return (
    <StyledFaqs id="faqs-section">
      <div className="faqs-wrapper">
        <H2 className="faq-title" type="dark">
          FAQs
        </H2>
        <br />
        <br />
        {[
          {
            title: "What is Silly Monster?",
            content:
              "Silly Monster is an NFT drop of adorable monster characters created by BullLabs. This unique NFT drop on Opensea celebrates the power of imagination, and the joy of owning an NFT collection. ",
          },
          {
            title: "Where can I buy Silly Monster NFT collection?",
            content:
              "You can mint your Silly Monster NFT on Opensea marketplace now.",
          },
          {
            title:
              "How the value of Silly Monster NFT increase in near future?",
            content:
              "Marketing and merchandising among other initiatives outlined in the Silly Monster roadmap will help increase its value very soon.",
          },
          {
            title: "Buying Silly Monster NFT is it worth it?",
            content:
              "Planned NFT collections have a tendency to increase in value quite rapidly, if you are planning to invest in NFTs, then buying Silly Monster can give you good returns.",
          },
          {
            title:
              "What are the benifits of being a Silly Monster NFT club member?",
            content:
              "As a Silly Monster NFT club member you are entitled to future exclusive member-only NFTs. You can also get other benifits like community giveaways and event invitations.",
          },
          {
            title: "Who created Silly Monster NFT?",
            content: "Silly Monster NFT collection is created by BulLabs.",
          },
        ].map((item, index) => (
          <CustomCollapse
            key={index}
            className="collapse-wrapper"
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </StyledFaqs>
  );
};

export default Faqs;

const StyledFaqs = styled.div`
  padding: 6rem 0;
  @media screen and (max-width: 600px) {
  padding: 3rem 0;
  }
  .faqs-wrapper {
    width: ${content_width};
    margin: 0 auto;
    @media screen and (max-width: 1600px) {
      width: 100%;
      padding: 0 20px;
    }
    .faq-title {
    @media screen and (max-width: 600px) {
      text-align: start;
      width: 60%;
    }
  }
  .collapse-wrapper {
    margin-bottom: 1.5rem;
  }
`;
