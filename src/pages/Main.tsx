import { Layout, Row } from 'antd';
import {FC, useEffect, useState} from 'react';
import Item from '../components/Item';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IItem } from '../models/IItem';

const Main: FC = () => {
    const {items} = useTypedSelector(state => state.item)
    console.log('main',items)
    const {fetchItems} = useActions()
    useEffect( () => {
        fetchItems()
      }, [])
    return (
        <Layout>
            <Row justify="center" align="middle" className="h100">
            <button onClick={()=> fetchItems()}>Получить список</button>
            {items.map( (item, index) => 
             <Item id={item.id} name={item.name} count={item.count} key={index + item.name}/>
            )}            
            </Row>
        </Layout>

    );
};

export default Main;