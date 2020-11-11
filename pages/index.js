import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { languagesArray, ownerData, repositoriesArray} from '../src/recoil/atoms';
import { ReposList } from '../src/components/layout/ReposList';
import { Header } from '../src/components/layout/Header';
import { SearchArea } from '../src/components/layout/SearchArea';
import { BackTop } from '../src/components/common/BackTop';
import { getLanguagesArray } from '../src/utils';

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
  padding: 0 1rem;
  max-width: 1140px;
  widthL 100%;
  position: relative;
  margin: auto;
`;

const Index = ({ repositories: repoData }) => {
  const [searchInputValue, setSearchInputValue] = useState('');

  const setRepositoriesArray = useSetRecoilState(repositoriesArray);
  const setLanguagesArray = useSetRecoilState(languagesArray);
  const setOwnerData = useSetRecoilState(ownerData);

  useEffect(() => {
    const { owner: ownerData } = repoData[0];
    const languagesArray = getLanguagesArray(repoData);

    setRepositoriesArray(repoData);
    setLanguagesArray(languagesArray);
    setOwnerData(ownerData);
  });

  return (
    <>
      <Header />
      <Container>
        <SearchArea {...{ searchInputValue, setSearchInputValue }} />
        <ReposList  {...{ searchInputValue }} />
        <BackTop />
      </Container>
    </>
  );
};

export default Index;
