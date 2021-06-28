import React from 'react';
import { Menu } from 'antd';

interface ListProps {
    theme: 'light' | 'dark';
    mode: 'vertical' | 'horizontal' | 'inline';
    defaultSelectedKeys: string[];
    children: React.ReactNode | React.ReactNodeArray;
}

const ListStyles = {
    height: '100%'
}

const List: React.FC<ListProps> = ({theme, mode, defaultSelectedKeys, children}): JSX.Element => {
    return <Menu theme={theme} mode={mode} defaultSelectedKeys={defaultSelectedKeys} style={ListStyles}>
        {children}
    </Menu>
};

export default List;
