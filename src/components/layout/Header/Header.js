import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../common/Logo';

const Container = styled.div`
  background-color: ${({theme}) => theme.black};
  width: 100%;
  padding: 0.3rem;
`;

export const Header = () => {
  return (
    <Container>
      <Logo />
    </Container>
  );
};
