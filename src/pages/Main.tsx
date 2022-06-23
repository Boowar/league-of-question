import { Layout, Row } from 'antd';
import React, {FC} from 'react';
import Item from '../components/Item';

const Main: FC = () => {
    return (
        <Layout>
            <Row justify="center" align="middle" className="h100">
            Main PAGE
            <Item />
            </Row>
        </Layout>

    );
};

export default Main;