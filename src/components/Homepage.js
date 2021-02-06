import React from 'react';
import { Row, Col, Button } from 'antd';
import Logo from '../assets/mastermind.svg';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <React.Fragment>
            <Row
                justify='center'
                align='middle'
                className='homepage logo-container'
            >
                <Col xs={12} sm={12}>
                    <img alt='logo' className='logo' src={Logo}></img>
                </Col>
            </Row>
            <Row justify='center' align='middle' className='button-container'>
                <Col xs={12} sm={12}>
                    <Link to='/game'>
                        <Button type='primary' block>
                            Play
                        </Button>
                    </Link>

                    <Link to='/instructions'>
                        <Button block>Instructions</Button>
                    </Link>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Homepage;
