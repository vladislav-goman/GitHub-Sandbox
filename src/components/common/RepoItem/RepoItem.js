import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';
import { formatDate } from '../../../utils';

const RepoItemContainer = styled.div`
  margin-bottom: 1rem;
  width: 100%;
`;

const RepoName = styled.a`
  color: ${({ theme }) => theme.royalBlue};
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 0;
`;

const MetaContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RepoDescription = styled.p`
  color: ${({ theme }) => theme.niceBlack};
  font-size: 1.125rem;
  margin-bottom: ${({ theme }) => theme.spacing_02};
`;

const { Meta } = Card;

export const RepoItem = ({ name, html_url, description, language, updated_at, ...props }) => {
  console.log(props);
  return (
    <RepoItemContainer>
      <Card
        title={
          <RepoName href={html_url} target="_blank">
            {name}
          </RepoName>
        }
      >
        <RepoDescription>{description || 'No description provided.'}</RepoDescription>
        <Meta
          description={
            <MetaContainer>
              <span>{`${language || 'Mixed'}`}</span>
              <span>{`Updated on ${formatDate(updated_at)}`}</span>
            </MetaContainer>
          }
        />
      </Card>
    </RepoItemContainer>
  );
};
