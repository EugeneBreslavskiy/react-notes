import React from 'react';
import { Layout } from 'antd';
import Note from './Note';

const { Content } = Layout;

const WorkspaceStyles = {
    padding: '25px',
    backgroundColor: '#fff'
}

const Workspace: React.FC = (): JSX.Element => {
    return <Content style={WorkspaceStyles}>
        <Note/>
    </Content>
};

export default Workspace;
