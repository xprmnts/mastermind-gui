import React from 'react';
import { Row, Col } from 'antd';
import Board from './components/Board';
import Choices from './components/Choices';

import './App.less';

const App = () => {
    return (
        <Row justify='center'>
            <Col xs={24} sm={24} className='top-panel'>
                <Board />
            </Col>
            <Col xs={24} sm={24} className='bottom-panel'>
                <Choices />
            </Col>
        </Row>
    );
};

export default App;
