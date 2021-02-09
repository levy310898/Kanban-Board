import React from 'react';
import { Row, Col } from 'antd';
import KanbanGroup from '../KanbanGroup';
import { render } from '@testing-library/react';
import {group} from '../../const';
// data must fetch from here. Let make const data first

const KanbanBoard = (props) => {
  const renderGroup = group.map((item, index) => (
    <Col xs={24} sm={24} md={12} lg={6} key = {index}>
      <KanbanGroup name={item.name} status={item.status}/>
    </Col>))
  return (<div className = "trelloBox">
    <Row gutter = {16}>
    {renderGroup}
    </Row>
  </div>)
}

export default KanbanBoard