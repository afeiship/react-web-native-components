import React from'react';
import ReactCheckbox from '../../src/main';
import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
  margin: 30px auto 0;
`;

export default () => {
  return (
    <Container>
      <ReactCheckbox onChange={e => {
        console.log('e: ', e.target)
      }}/>
    </Container>
  );
};
