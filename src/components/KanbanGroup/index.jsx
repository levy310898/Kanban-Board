import React,{useState} from 'react';
import { Card, Button, Modal, Form, Input, Select } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import { estimateTaskTime } from '../../const';

// data must fetch from here. Let make const data first

const { Option } = Select;
const KanbanGroup = (props) => {
  const { name, status } = props;
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => setIsModalVisible(true);
  const handleOk = () => {
    setIsModalVisible(false);
  }

  const handleCancel = () => {
    setIsModalVisible(false);
  }

  const handleSubmit = () => {
    console.log("handle submit");
  }

  return (<><Card title={name} extra={
    <EllipsisOutlined />}
    actions={status === 0 ? [
      <Button type="link" onClick={showModal}>Add Task</Button>
    ] : null}
  >
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
    
    
  </Card>
    < Modal title="Basic Modal" visible={isModalVisible} onOk={handleSubmit} onCancel={handleCancel} >
      <Form
      form = {form}
      name="basic"
      >
        <Form.Item
          label="Task name"
          name="taskName"
          rules={[{ required: true, message: 'Pls input your task name ' }]}
        >
          <Input allowClear/>
        </Form.Item>

        <Form.Item label="Time Estimate" name = "timeEstimate">
          <Select allowClear>
            {estimateTaskTime.map((item, index) => <Option key = {index} value={item} >{item} hours </Option>)}
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal >
  </>)

    
}

export default KanbanGroup