import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import Board from './components/Board';

import './App.less';

// const dataSource = [
//     {
//         key: '1',
//         attempt: 1,
//         slotOne: 1,
//         slotTwo: 2,
//         slotThree: 3,
//         slotFour: 4,
//         result: '1,1'
//     }
// ];

const App = () => {
    return (
        <Row justify='center'>
            <Col xs={24} sm={24} className='top-panel'>
                <Board />
            </Col>
        </Row>
    );
};

export default App;
