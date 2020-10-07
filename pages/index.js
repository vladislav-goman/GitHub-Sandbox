import React from 'react';
import styled from 'styled-components';
import { ReposList } from '../src/components/layout/ReposList';
import { Header } from '../src/components/layout/Header';
import { BackTop } from '../src/components/common/BackTop';

export async function getStaticProps() {
  const username = 'PeekyEater';
  const repositoriesResponse = await fetch(`https://api.github.com/users/${username}/repos`);
  const repositories = await repositoriesResponse.json();

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

const Index = ({ repositories: repoData }) => {
  const { owner: ownerData } = repoData[0];
  return (
    <Container>
      <Header owner={ownerData} />
      <ReposList repositories={repoData} />
      <BackTop />
    </Container>
  );
};

export default Index;
