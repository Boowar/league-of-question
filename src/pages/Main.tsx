import { Layout, Row } from 'antd';
import {FC, useEffect} from 'react';
import Item from '../components/Item';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IItem } from "../models/IItem";

const Main: FC = () => {
    const {items} = useTypedSelector(state => state.item)
    console.log('main items',items)
    const {fetchItems, addItem, delItem} = useActions()
    const removeItem = (item: IItem) => delItem(item)
    useEffect( () => {
        fetchItems()
      }, [])
    return (
        <Layout>
            <Row justify="center" align="middle" className="h100">
            <button onClick={()=> fetchItems()}>Получить список</button>
            {items.map( (item, index) => 
             <div onClick={() => removeItem(item)}><Item id={item.id} name={item.name} count={item.count} key={index + item.name} 
             onClick={delItem}/></div>
            )}
            <button onClick={()=> addItem(String(prompt()))}>Добавить</button>            
            </Row>
        </Layout>

    );
};

export default Main;