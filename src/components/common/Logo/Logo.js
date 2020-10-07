import React from 'react';
import styled from 'styled-components';
import { Image } from 'antd';

const logoDimension = '2rem';

const Logotype = styled.h1`
  color: ${({ theme }) => theme.white};
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 0;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  justify-content: center;
  margin-right: 1rem;
  height: ${logoDimension};
  width: ${logoDimension};
`;

const LogoGroupContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: ${({ theme }) => theme.spacing_04};
`;

export const Logo = () => {
  return (
    <LogoGroupContainer>
      <LogoContainer>
        <Image height={logoDimension} width={logoDimension} alt="GitHub Sandbox" src="/img/github.jpg" placeholder />
      </LogoContainer>
      <Logotype>GitHub Sandbox</Logotype>
    </LogoGroupContainer>
  );
};
