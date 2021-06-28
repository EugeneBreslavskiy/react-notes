import React from 'react';
import { Menu } from 'antd';

interface ListItemProps {
    title: string
}

const ListItem: React.FC<ListItemProps> = ({title}): JSX.Element => {
    return <Menu.Item>
        {title}
    </Menu.Item>
};

export default ListItem;
