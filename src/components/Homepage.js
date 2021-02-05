import React from 'react';
import { Row, Col, Button } from 'antd';
import Logo from '../assets/mastermind.svg';

const Homepage = () => {
    return (
        <React.Fragment>
            <Row justify='center' align='middle' className='logo-container'>
                <Col xs={12} sm={12}>
                    <img alt='logo' className='logo' src={Logo}></img>
                </Col>
            </Row>
            <Row justify='center' align='middle' className='button-container'>
                <Col xs={12} sm={12} className='button-container'>
                    <Button type='primary' block>
                        Play
                    </Button>
                    <Button type='primary' block>
                        Instructions
                    </Button>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Homepage;
