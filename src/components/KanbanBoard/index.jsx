import React from 'react';
import { Row, Col } from 'antd';
import KanbanGroup from '../KanbanGroup';
import { render } from '@testing-library/react';
// data must fetch from here. Let make const data first

const group = [
  {
    name: 'To Do',
    status:0,
  },
  {
    name: 'In Progress',
    status: 1,
  },
  {
    name: 'Testing',
    status: 2,
  },
  {
    name: 'Done',
    status: 3,
  }
]

const KanbanBoard = (props) => {
  const renderGroup = group.map(item => (
    <Col xs={24} sm={24} md={12} lg={6} >
      <KanbanGroup name={item.name} status={item.status}/>
    </Col>))
  return (<div className = "trelloBox">
    <Row gutter = {16}>
    {renderGroup}
    </Row>
  </div>)
}

export default KanbanBoard