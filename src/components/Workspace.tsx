import React from 'react';
import { Layout, Space, Button, Typography } from 'antd';

const { Content } = Layout;
const { Paragraph } = Typography;

const WorkspaceStyles = {
    padding: '25px',
    backgroundColor: '#fff'
}

const Workspace: React.FC = (): JSX.Element => {
    return <Content style={WorkspaceStyles}>
        <Paragraph>Item content</Paragraph>
        <Space size={'small'}>
            <Button>Delete</Button>
            <Button>Edit</Button>
        </Space>
    </Content>
};

export default Workspace;
