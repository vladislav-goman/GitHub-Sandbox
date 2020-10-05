import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: ${({ theme }) => theme.defaultFont};
  padding: ${({ theme }) => theme.spacing_3};
  color: ${({ theme }) => theme.white};
  font-weight: 500;
`;

const 

export const Logo = () => {
  return (
    <Container>
      <h1>Knowledge Lab</h1>
    </Container>
  );
};
