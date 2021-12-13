import React, { useState } from 'react';
import ReactDialog from '../../src/main';
import styled from 'styled-components';
import '../../src/components/style.scss';

const Container = styled.div`
  width: 80%;
  margin: 30px auto 0;
`;

export default (props: any) => {
  const [value, setValue] = useState(true);
  return (
    <Container>
      <ReactDialog value={value}>
        <header>
          <h1>Header</h1>
        </header>
        <div className="is-content">
          <p>道可道，非常道；名可名，非常名。</p>
          <p>无名，天地之始，有名，万物之母。</p>
          <p>故常无欲，以观其妙，常有欲，以观其徼。</p>
          <p>此两者，同出而异名，同谓之玄，玄之又玄，众妙之门。</p>
        </div>
        <footer>
          <button onClick={() => setValue(false)}>Close</button>
        </footer>
      </ReactDialog>
      <button onClick={(e) => setValue(true)}>Toggle-true</button>
      <button onClick={(e) => setValue(false)}>Toggle-false</button>
    </Container>
  );
};
