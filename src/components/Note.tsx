import React, { useContext } from 'react';
import { Space, Button, Typography } from 'antd';
import { Context } from '../context';

const { Paragraph } = Typography;

const Note: React.FC = (): JSX.Element => {
    const ctx = useContext(Context);

    return <>
        <Paragraph>Item content</Paragraph>
        <Space size={'small'}>
            <Button>Delete</Button>
            <Button>Edit</Button>
        </Space>
    </>
};

export default Note;
