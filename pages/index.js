import React from 'react';
import styled from 'styled-components';
import { ReposList } from '../src/components/layout/ReposList';

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/users/PeekyEater/repos');
  const repositories = await res.json();

  return {
    props: {
      repositories,
    },
  };
}

const Container = styled.div`
  font-family: ${({ theme }) => theme.defaultFont};
  padding: ${({ theme }) => theme.spacing_3};
  max-width: 1140px;
  padding: 0 1rem;
  widthL 100%;
  position: relative;
  margin: auto;
`;

const Index = ({ repositories }) => {
  return (
    <Container>
      <h1>Github Repo Sandbox</h1>
      <p>A list of open GraphQL jobs.</p>
      <ReposList repositories={repositories} />
    </Container>
  );
};

export default Index;
