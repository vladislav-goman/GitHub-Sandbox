import React from 'react';
import styled from 'styled-components';
import { Avatar } from 'antd';

const UserPreviewContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: ${({ theme }) => theme.spacing_04};
`;

const UserName = styled.h2`
  color: ${({ theme }) => theme.white};
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 0;
`;

const AvatarContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  justify-content: center;
`;

export const UserPreview = ({ login, avatar_url }) => {
  return (
    <UserPreviewContainer>
      <AvatarContainer>
        <Avatar size={32} src={avatar_url} />
      </AvatarContainer>
      <UserName>{login}</UserName>
    </UserPreviewContainer>
  );
};
