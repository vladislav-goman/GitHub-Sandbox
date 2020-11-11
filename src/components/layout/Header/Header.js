import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { ownerData } from '../../../recoil/atoms';
import { Row, Col } from 'antd';
import { Logo } from '../../common/Logo';
import { UserPreview } from '../../common/UserPreview';

const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.black};
  font-family: ${({ theme }) => theme.defaultFont};
  color: ${({ theme }) => theme.white};
  width: 100%;
  padding: 1rem;
  margin-bottom: 2rem;
`;

export const Header = () => {
  const owner = useRecoilValue(ownerData);

  return (
    <HeaderContainer>
      <Row>
        <Col span={12}>
          <Logo />
        </Col>
        <Col span={12}>
          <UserPreview {...owner} />
        </Col>
      </Row>
    </HeaderContainer>
  );
};
