import React from 'react';
import { Layout } from 'antd';
import List from './List';
import ListItem from "./ListItem";

const { Sider } = Layout;

interface SidebarProps {
    width: number;
    theme: 'light' | 'dark';
}

const Sidebar: React.FC<SidebarProps> = ({width, theme}): JSX.Element => {
    return <Sider width={width} theme={theme} style={{padding: '25px 10px'}}>
        <List theme={'light'} mode={'vertical'} defaultSelectedKeys={['1']}>
            <ListItem title={'Item'}/>
        </List>
    </Sider>
};

export default Sidebar;
