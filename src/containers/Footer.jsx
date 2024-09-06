import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Text from "@/components/Text";
import { content_width, primary_color } from "@/constants";

const navLinkArr = [
  {
    name: "Home",
    id: "home-section",
  },
  {
    name: "About",
    id: "about-section",
  },
  {
    name: "Roadmap",
    id: "roadmap-section",
  },
  {
    name: "Rarity",
    id: "rarity-section",
  },
];

const NavLinkList = (props) => {
  return (
    <div className={`nav-links ${props.className}`}>
      {navLinkArr.map((item) => (
        <a key={item.id} onClick={() => scrollToSection(item.id)}>
          {item.name}
        </a>
      ))}
    </div>
  );
};

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <StyledFooter>
      <div className="footer-wrapper">
        <Text className="footer-text">Silly Monster</Text>
        <div className="social-icons-wrapper">
          {[
            {
              image: "/footer-1.svg",
              src: "https://twitter.com/SillyMonsterNFT",
            },
            {
              image: "/footer-2.svg",
              src: "https://discord.com/invite/KvhdY4cW",
            },
            {
              image: "/footer-3.svg",
              src: "https://t.me/+Rh0IjHaB-K81NDc0",
            },
          ].map((item, index) => (
            <a href={item.src} target="_blank">
              <StyledImage
                key={index}
                src={item.image}
                alt="social-logo"
                width={52}
                height={52}
              />
            </a>
          ))}
        </div>
        <div className="nav-links nav-link-big">
          {navLinkArr.map((item) => (
            <a key={item.id} onClick={() => scrollToSection(item.id)}>
              {item.name}
            </a>
          ))}
        </div>
      </div>
      <div className="nav-links nav-link-small">
        {navLinkArr.map((item) => (
          <a key={item.id} onClick={() => scrollToSection(item.id)}>
            {item.name}
          </a>
        ))}
      </div>
      <p className="footer-copy-text">
        © 2024 Silly Monster. All rights reserved &nbsp;&nbsp;|&nbsp;&nbsp;
        Privacy Policy
      </p>
      <div className="mobile-copy-text">
        <p> © 2024 Silly Monster. All rights reserved</p>
        <p>Privacy Policy</p>
      </div>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  background: #000;
  align-items: center;
  flex-direction: column;
  .footer-wrapper {
    width: ${content_width};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #fff;
    padding: 3rem;
    @media screen and (max-width: 1550px) {
      width: 100%;
      padding: 20px;
    }
    .footer-text {
      font-size: 52px;
      @media screen and (max-width: 1000px) {
        font-size: 42px;
      }
      @media screen and (max-width: 850px) {
        font-size: 32px;
      }
      @media screen and (max-width: 600px) {
        font-size: 20px;
      }
    }
    .social-icons-wrapper {
      display: flex;
      align-items: center;
      gap: 1.2rem;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 1.2rem;
      a {
        cursor: pointer;
        font-size: 20px;
        color: #fff;
        &:hover {
          color: ${primary_color};
        }
      }
    }
    .nav-link-big {
      @media screen and (max-width: 1550px) {
        display: none;
      }
    }
  }
  .footer-copy-text {
    display: block;
    color: #fff;
    font-size: 20px;
    padding: 3rem;
    @media screen and (max-width: 1400px) {
      display: none;
    }
  }
  .mobile-copy-text {
    display: none;
    color: #fff;
    font-size: 20px;
    padding: 3rem;

    @media screen and (max-width: 1400px) {
      display: flex;
      text-align: center;
      padding: 1.5rem 1rem;
      flex-direction: column;
      align-items: center;
    }
    @media screen and (max-width: 600px) {
      font-size: 12px;
    }
  }
  .nav-link-small {
    font-size: 20px;
    color: #fff;
    display: flex;
    gap: 2rem;
    border-bottom: 1px solid #fff;
    width: 100%;
    justify-content: center;
    padding: 2rem;
    @media screen and (min-width: 1550px) {
      display: none;
    }
    @media screen and (max-width: 850px) {
      font-size: 32px;
    }
    @media screen and (max-width: 600px) {
      font-size: 20px;
    }
  }
`;

const StyledImage = styled(Image)`
  &:hover {
    // filter: invert(1);
    cursor: pointer;
  }
  @media screen and (max-width: 600px) {
    width: 26px;
  }
`;
