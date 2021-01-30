import React from 'react';
import styled from 'styled-components';

import A from './A';
import Img from './Img';

import Banner from './images/church-name-en.png';
import bgImage from './images/header-background.png';
import leftImage from './images/mary-left.png';
import rightImage from './images/stantony-right.png';

const HeaderWrapper = styled.div`
  max-width: 100%;
`;
const TitleWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
  background: rgba(1, 71, 129, 0.8) url(${bgImage});
`;
const LeftImgWrapper = styled.span`
  width: 152px;
  position: absolute;
  top: 10px;
  left: 20px;
`;
const RightWrapper = styled.span`
  width: 152px;
  position: absolute;
  top: 28px;
  right: 45px;
`;

function NavBar() {
  return (
    <>
      <HeaderWrapper>
        <TitleWrapper>
          <A href="#">
            <Img src={Banner} alt="react-boilerplate - Logo" />
          </A>
        </TitleWrapper>
        <LeftImgWrapper>
          <Img src={leftImage} alt="" />
        </LeftImgWrapper>
        <RightWrapper>
          <Img src={rightImage} alt="" />
        </RightWrapper>
      </HeaderWrapper>
    </>
  );
}

export default NavBar;
