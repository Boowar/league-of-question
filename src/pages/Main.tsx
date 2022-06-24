import { Layout, Row } from 'antd';
import {FC, useEffect, useState} from 'react';
import Item from '../components/Item';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IItem } from '../models/IItem';

const Main: FC = () => {
    const [items] = useState<IItem>(state => state.items)
    const {getItems} = useActions()
    useEffect(
      () => {
        const items = getItems()
      })
    return (
        <Layout>
            <Row justify="center" align="middle" className="h100">
            items.map()
            <Item />
            </Row>
        </Layout>

    );
};

export default Main;