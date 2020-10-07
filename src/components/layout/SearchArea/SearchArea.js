import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Input, Select, Row, Col } from 'antd';
import { orderingTypesMap } from '../../../utils';

const { Option } = Select;

const SearchAreaContainer = styled.div``;

const FilterItemWrapper = styled.div`
  width: 100%;

  @media screen and (max-width: 700px) {
    margin-bottom: ${({ theme }) => theme.spacing_2};
  }
`;

export const SearchArea = ({ languagesArray, searchInputValue, setSearchInputValue, setSelectedLanguages, setOrderingType }) => {
  const [isMobileMode, setIsMobileMode] = useState(false);
  const resizeHandler = () => {
    if (window.innerWidth > 700) {
      setIsMobileMode(false);
    } else {
      setIsMobileMode(true);
    }
  };

  const handleLanguagesChange = (value) => {
    setSelectedLanguages(value);
  };
  const handleSortTypeChange = (value) => {
    setOrderingType(value);
  };
  const handleSearchInputChange = ({ target }) => {
    setSearchInputValue(target.value);
  };
  const languageOptions = languagesArray.map((item) => <Option key={item}>{item}</Option>);
  const sortOptions = Object.keys(orderingTypesMap).map((item) => <Option key={item}>{item}</Option>);

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <SearchAreaContainer>
      <Row gutter={16}>
        <Col span={isMobileMode ? 24 : 12}>
          <FilterItemWrapper>
            <Input value={searchInputValue} onChange={handleSearchInputChange} placeholder="Find a repository..." />
          </FilterItemWrapper>
        </Col>
        <Col span={isMobileMode ? 24 : 6}>
          <FilterItemWrapper>
            <Select mode="multiple" size="default" placeholder="Language" onChange={handleLanguagesChange} style={{ width: '100%' }}>
              {languageOptions}
            </Select>
          </FilterItemWrapper>
        </Col>
        <Col span={isMobileMode ? 24 : 6}>
          <FilterItemWrapper>
            <Select placeholder="Sort by" size="default" onChange={handleSortTypeChange} style={{ width: '100%' }}>
              {sortOptions}
            </Select>
          </FilterItemWrapper>
        </Col>
      </Row>
    </SearchAreaContainer>
  );
};
