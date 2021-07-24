import React from 'react';
import styled from 'styled-components';

import LocaleToggle from 'containers/LocaleToggle';

import A from './A';
import Img from './Img';

import { device } from '../../containers/App/deviceBreakpoints';

import bannerTamil from './images/church-name-ta.png';
import bannerEnglish from './images/church-name-en.png';
import bgImage from './images/header-background.png';
import leftImage from './images/mary-left.png';
import rightImage from './images/stantony-right.png';

const HeaderWrapper = styled.div`
  width: 100%;
  height: 210px;
  position: relative;
  @media ${device.tablet} {
    height: 163px;
  }
  @media ${device.mobileL} {
    height: 100px;
  }
  @media ${device.desktop} {
    max-height: 210px;
  }
  @media screen and (min-width: 320px) and (orientation: landscape) {
    min-width: 100%;
  }
`;

const TitleWrapper = styled.div`
  max-width: 100%;
  display: flex;
  min-height: 100%;
  flex-direction: column;
  background: rgba(1, 71, 129, 0.8) url(${bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  @media ${device.desktop} {
    position: relative;
    top: 0px;
  }
`;
const LeftImgWrapper = styled.span`
  width: 143px;
  position: absolute;
  top: 10px;
  left: 50px;
  z-index: 1;
  @media ${device.tablet} {
    width: 100px;
  }
  @media ${device.mobileL} {
    width: 67px;
    left: 20px;
  }
  @media ${device.desktop} {
  }
`;
const RightWrapper = styled.span`
  width: 175px;
  position: absolute;
  top: 14px;
  right: 100px;
  @media ${device.desktop} {
    width: 150px;
    right: 40px;
    top: 42px;
  }
  @media ${device.tablet} {
    width: 108px;
  }
  @media ${device.mobileL} {
    width: 67px;
    right: 15px;
    top: 25px;
  }
`;

function Header() {
  const curLanguage = document.querySelector('#languageSelector')
    ? document.querySelector('#languageSelector').value
    : '';
  const Banner = curLanguage === 'de' ? bannerTamil : bannerEnglish;
  return (
    <header>
      <HeaderWrapper>
        <TitleWrapper>
          <A href="#">
            <Img src={Banner} alt="managa annai church - Logo" />
          </A>
        </TitleWrapper>
        <LocaleToggle />
        <LeftImgWrapper>
          <Img src={leftImage} alt="" />
        </LeftImgWrapper>
        <RightWrapper>
          <Img src={rightImage} alt="" />
        </RightWrapper>
      </HeaderWrapper>
    </header>
  );
}

export default Header;
