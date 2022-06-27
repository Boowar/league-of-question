import { Layout, Row } from 'antd';
import {FC, useEffect, useState} from 'react';
import Item from '../components/Item';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IItem } from '../models/IItem';

const Main: FC = () => {
    const {items} = useTypedSelector(state => state.item)
    console.log('main',items)
    return (
        <Layout>
            <Row justify="center" align="middle" className="h100">
            
            <Item items={items}/>
            </Row>
        </Layout>

    );
};

export default Main;