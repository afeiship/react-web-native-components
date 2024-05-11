import ReactInput from '../../src/main';
import styled from 'styled-components';
import {useRef} from "react";

const Container = styled.div`
  width: 80%;
  margin: 30px auto 0;
`;

export default (props: any) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  return (
    <Container>
      <ReactInput
        ref={ref1}
        forwardedRef={ref2}
        placeholder="Type something..."
        onChange={(e) => {
          console.log(e, ref1, ref2, e.target.value);
        }}
      />
    </Container>
  );
};
