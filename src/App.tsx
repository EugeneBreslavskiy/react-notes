import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import Sidebar from './components/Sidebar';
import Workspace from './components/Workspace';

const LayoutStyles = {
    display: 'flex',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '50px 100px',
}

function App() {
  return (
      <div className="App">
          <Layout style={LayoutStyles}>
              <Sidebar width={200} theme={'light'}/>
              <Workspace/>
          </Layout>
      </div>
  );
}

export default App;
