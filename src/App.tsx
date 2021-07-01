import React, {useState} from 'react';
import { Layout } from 'antd';
import { Context } from './context';
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
    const [notes, setNotes] = useState();

    const removeNote = (id: number) => {
        console.log(`remove note with id ${id}`);
    }

    return (
        <Context.Provider value={{
            removeNote
        }}>
            <div className="App">
                <Layout style={LayoutStyles}>
                    <Sidebar width={200} theme={'light'}/>
                    <Workspace/>
                </Layout>
            </div>
        </Context.Provider>
    );
}

export default App;
