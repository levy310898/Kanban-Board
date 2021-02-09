import React from 'react';
import { Row, Col } from 'antd';
import KanbanGroup from '../KanbanGroup';
import { render } from '@testing-library/react';
import { group } from '../../const';
// data must fetch from here. Let make const data first

const KanbanTask = (props) => {
  const { name, estimate,priority,status } = props;
  return (<div>
    {name}
  </div>)
}

export default KanbanBoard