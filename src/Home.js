import React from 'react';
import styled from 'styled-components';
import MemeGenerator from './MemeGenerator';

const BlockWrapper = styled.div`
  display: flex;
  margin-top: 2%;
  margin-left: 32%;
`;
export const Home = (props) => (
  <BlockWrapper>
    <MemeGenerator/>
  </BlockWrapper>
)