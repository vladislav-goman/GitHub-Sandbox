import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setRepositoriesArray, setLanguagesArray, setOwnerData } from '../src/redux/actions/actionCreators';
import styled from 'styled-components';
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

  const dispatch = useDispatch();

  useEffect(() => {
    const { owner: ownerData } = repoData[0];
    const languagesArray = getLanguagesArray(repoData);

    dispatch(setRepositoriesArray(repoData));
    dispatch(setLanguagesArray(languagesArray));
    dispatch(setOwnerData(ownerData));
  }, []);

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
