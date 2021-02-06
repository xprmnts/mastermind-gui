import React from 'react';
import { Row, Col, Button } from 'antd';
import Logo from '../assets/mastermind.svg';
import { Link } from 'react-router-dom';

const Instructions = () => {
    return (
        <React.Fragment>
            <Row
                justify='center'
                align='middle'
                className='instructions logo-container'
            >
                <Col xs={12} sm={12}>
                    <img alt='logo' className='logo' src={Logo}></img>
                </Col>
            </Row>
            <Row justify='center' align='middle' className='instructions-text'>
                <Col xs={16} sm={16}>
                    <h2>Introduction</h2>
                    <p>
                        As the Code-maker: the computer will set a mystery code
                        that will try to keep you guessing for as long as
                        possible.{' '}
                    </p>
                    <p>
                        As the Decoder: you must break the secret code in the
                        fewest number of guesses.
                    </p>
                    <h2>Gameplay</h2>
                    <p>
                        1. The code is 4 digits long. Set all four digits using
                        the selection tool.
                    </p>
                    <p>
                        2. There are 6 possible values per digit. Each digit
                        must be between 1-6 (inclusive).
                    </p>
                    <p>
                        3. You will have 10 attempts as the decoder to try and
                        guess the code.
                    </p>
                </Col>
            </Row>
            <Row justify='center' className='instructions-text'>
                <Col xs={16} sm={16}>
                    <Row justify='space-between'>
                        <Link to='/'>
                            <Button type='link'>Back</Button>
                        </Link>
                        <Link to='/game'>
                            <Button type='link'>Play</Button>
                        </Link>
                    </Row>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Instructions;
