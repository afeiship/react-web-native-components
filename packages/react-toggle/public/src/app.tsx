import React from 'react';
import ReactToggle from '../../src/main';
import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
  margin: 30px auto 0;

  .react-toggle {
    background: #eee;
    border: 1px solid #f60;
    width: 120px;
    height: 120px;

    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    margin: 0 auto 10px;
    &[data-value='true'] {
      background: #f00;
    }
    &[data-value='false'] {
    }
  }
`;

export default (props: any) => {
  const [value, setValue] = React.useState(false);
  return (
    <Container>
      <ReactToggle value={value} onChange={(e) => setValue(e.target.value)}>
        Click Me
      </ReactToggle>
      <div className="is-code">
        <pre>
          <code>Value: {String(value)}</code>
        </pre>
      </div>
    </Container>
  );
};
