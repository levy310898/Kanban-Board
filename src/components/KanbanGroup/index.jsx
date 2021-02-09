import React from 'react';
import { Card } from 'antd';
// data must fetch from here. Let make const data first

const KanbanGroup = (props) => {
  const {name,status} = props;
  return (<Card title={name} extra={<a href="#">More</a>}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>)
}

export default KanbanGroup