import './App.css';
import { Layout,Menu } from 'antd';
import KanbanBoard from './components/KanbanBoard';

function App() {

  const { Header, Content, Footer } = Layout;
  return (
    // <div className="App">
    //   <div className="Header">This is Header</div>
      
    //   <KanbanBoard />
    // </div>

    <Layout className="layout">
    <Header>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">Kanban Board</Menu.Item>
      </Menu>
        this is header
    </Header>
    <Content style={{ padding: '50px' }}>
      <KanbanBoard />
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  );
}

export default App;
