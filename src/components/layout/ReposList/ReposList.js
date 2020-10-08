import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RepoItem } from '../../common/RepoItem';
import { Row, Col } from 'antd';
import { filterByLanguage, findItemByName } from '../../../utils';
import { orderingTypesMap } from '../../../utils';

const ReposListContainer = styled.div`
  margin: 2rem 0;
`;

const getRepositories = (repoItemData) => {
  return (
    <Col span={24} key={repoItemData.id}>
      <RepoItem {...repoItemData} />
    </Col>
  );
};

const applyOrdering = (items, orderingType) => {
  return orderingType ? orderingTypesMap[orderingType](items) : items;
}

const applyFilters = (items) => (selectedLanguages) => (searchTerm) => (orderingType) =>
  applyOrdering(filterByLanguage({ items: findItemByName({ items, searchTerm }), selectedLanguages }), orderingType);

export const ReposList = ({ repositories = [], searchInputValue }) => {
  const orderingType = useSelector(({ searchAreaControls }) => searchAreaControls.orderingType);
  const selectedLanguages = useSelector(({ searchAreaControls }) => searchAreaControls.selectedLanguages);

  const filteredRepos = applyFilters(repositories)(selectedLanguages)(searchInputValue)(orderingType);
  const content = filteredRepos.map(getRepositories);
  return (
    <ReposListContainer>
      <Row>{content}</Row>
    </ReposListContainer>
  );
};
