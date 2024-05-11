import ReactTree from '../../src/main';
import styled from 'styled-components';
import { items } from './items';

const Container = styled.div`
  width: 80%;
  margin: 30px auto 0;

  .react-tree {
    padding: 20px;
    .is-node {
      margin-left: 20px;
      &[collapsed] {
        .is-branch {
          display: none;
        }
      }
    }

    > .is-node {
      margin-left: 0;
    }
  }
`;

const template = ({ item, independent }, cb) => {
  if (independent) {
    return (
      <div key={item.value} className="is-node is-leaf">
        <label className={'is-label'}>{item.label}</label>
      </div>
    );
  } else {
    return (
      <div key={item.value} className={'is-node'}>
        <label className="is-label">{item.label}</label>
        <div className="is-nodes">{cb()}</div>
      </div>
    );
  }
};

export default (props: any) => {
  return (
    <Container>
      <ReactTree template={template} items={items} />
    </Container>
  );
};
