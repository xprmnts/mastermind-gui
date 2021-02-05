import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import Board from './components/Board';
import Homepage from './components/Homepage';
import Instructions from './components/Instructions';
import { generateSecretCode } from './helpers/generateSecretCode.js';

import './App.less';
// Default Config
//const _defaultAttempts = 10;
const _defaultChoices = 6;
const _defaultPegs = 4;

const secret = generateSecretCode(_defaultPegs, _defaultChoices);

const App = () => {
    return <Instructions />;
};

// const App = () => {
//     return (
//         <Row justify='center'>
//             <Col xs={24} sm={24} className='top-panel'>
//                 <Board secret={secret} />
//             </Col>
//         </Row>
//     );
// };

export default App;
