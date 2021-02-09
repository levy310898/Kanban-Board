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

    <Layout className="layout" style = {{height:'100vh'}}>
    <Header>
      This is Kanban Board
    </Header>
    <Content className = "kanbanBoard">
      <KanbanBoard />
    </Content>
    <Footer style={{ textAlign: 'center' }}>Kanban board ©2021 Created by Lê Hồ Vỹ</Footer>
  </Layout>
  );
}

export default App;
