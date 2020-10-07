import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, Select, Row, Col } from 'antd';
import { orderingTypesMap } from '../../../utils';

const { Option } = Select;

const SearchAreaContainer = styled.div``;

export const SearchArea = ({ languagesArray, searchInputValue, setSearchInputValue, setSelectedLanguages, setOrderingType }) => {
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

  return (
    <SearchAreaContainer>
      <Row gutter={16}>
        <Col span={12}>
          <Input value={searchInputValue} onChange={handleSearchInputChange} placeholder="Find a repository..." />
        </Col>
        <Col span={6}>
          <Select mode="multiple" size="default" placeholder="Language" onChange={handleLanguagesChange} style={{ width: '100%' }}>
            {languageOptions}
          </Select>
        </Col>
        <Col span={6}>
          <Select placeholder="Sort by" size="default" onChange={handleSortTypeChange} style={{ width: '100%' }}>
            {sortOptions}
          </Select>
        </Col>
      </Row>
    </SearchAreaContainer>
  );
};
