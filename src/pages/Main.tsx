import { Layout, Row } from 'antd';
import {FC, useEffect} from 'react';
import Item from '../components/Item';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Main: FC = () => {
    const {name, count} = useTypedSelector(state => state.item)
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