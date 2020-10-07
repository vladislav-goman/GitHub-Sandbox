import React from 'react';
import styled from 'styled-components';
import { BackTop as BackTopContainer } from 'antd';

const BackTopBox = styled.div`
  height: 40px;
  width: 40px;
  line-height: 40px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};
  text-align: center;
  font-size: 14px;
  transition: .3s all;

  &:hover {
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.3);
  }
`;

export const BackTop = () => (
  <BackTopContainer>
    <BackTopBox>UP</BackTopBox>
  </BackTopContainer>
);
