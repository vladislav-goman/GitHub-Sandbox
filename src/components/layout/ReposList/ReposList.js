import React from 'react';
import styled from 'styled-components';
import { RepoItem } from '../../common/RepoItem';
import { Row, Col } from 'antd';

const ReposListContainer = styled.div`

`;

export const ReposList = ({ repositories = [] }) => {
  const content = repositories.map((repoItemData) => {
    return (
      <Col span={24}>
        <RepoItem {...repoItemData} key={repoItemData.id} />
      </Col>
    );
  });
  return (
    <ReposListContainer>
      <Row>{content}</Row>
    </ReposListContainer>
  );
};
