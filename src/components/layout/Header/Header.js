import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import { Logo } from '../../common/Logo';
import { UserPreview } from '../../common/UserPreview';

const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const Header = ({ owner }) => {
  return (
    <HeaderContainer>
      <Row>
        <Col span={5}>
          <Logo />
        </Col>
        <Col span={14}></Col>
        <Col span={5}>
          <UserPreview {...owner} />
        </Col>
      </Row>
    </HeaderContainer>
  );
};
