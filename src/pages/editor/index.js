import React from 'react'

import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import Container from './Container'

import styles from './index.less';

function BasicLayout(props) {
  return (
    <div className={styles.layout}>
      <DndProvider backend={HTML5Backend}>
        <Container {...props} />
      </DndProvider>
    </div>
  );
}

export default BasicLayout;
