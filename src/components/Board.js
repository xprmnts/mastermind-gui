import React from 'react';
import { Row, Col, Button, Table, Select, Form } from 'antd';
import { validateGuess } from '../helpers/validateGuess.js';
import { generateSecretCode } from '../helpers/generateSecretCode.js';
import Logo from '../assets/mastermind.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

class Board extends React.Component {
    constructor(props) {
        super(props);

        this.columns = [
            {
                title: 'Att. #',
                dataIndex: 'attempt',
                key: 'attempt'
            },
            {
                title: <FontAwesomeIcon icon={faLock} />,
                dataIndex: 'slotOne',
                key: 'slotOne'
            },
            {
                title: <FontAwesomeIcon icon={faLock} />,
                dataIndex: 'slotTwo',
                key: 'slotTwo'
            },
            {
                title: <FontAwesomeIcon icon={faLock} />,
                dataIndex: 'slotThree',
                key: 'slotThree'
            },
            {
                title: <FontAwesomeIcon icon={faLock} />,
                dataIndex: 'slotFour',
                key: 'slotFour'
            },
            {
                title: 'E',
                dataIndex: 'exact',
                key: 'exact'
            },
            {
                title: 'P',
                dataIndex: 'partial',
                key: 'partial'
            }
        ];

        this.secret = generateSecretCode(this.props.choices, this.props.pegs);

        this.state = {
            history: [],
            count: 0
        };
    }

    onFinish = values => {
        const guess = [
            Number(values.slotOne),
            Number(values.slotTwo),
            Number(values.slotThree),
            Number(values.slotFour)
        ];

        const { success, exactMatchCount, partialMatchCount } = validateGuess(
            guess,
            this.secret
        );

        const { count, history } = this.state;

        values.key = count + 1;
        values.attempt = count + 1;
        values.exact = exactMatchCount;
        values.partial = partialMatchCount;

        // Add Results to Table

        this.setState({
            history: [...history, values],
            count: count + 1
        });

        if (success) {
            window.alert('You won!');
        }
    };

    render() {
        const { Option } = Select;
        const { history } = this.state;
        const columns = this.columns;

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
                <Row gutter={[0, 16]} className='game-container'>
                    <Col
                        xs={24}
                        sm={24}
                        m={24}
                        l={24}
                        xl={24}
                        className='table-container'
                    >
                        <Table
                            pagination={false}
                            dataSource={history}
                            columns={columns}
                            className='table'
                        />
                    </Col>

                    <Col
                        xs={24}
                        sm={24}
                        m={24}
                        l={24}
                        xl={24}
                        className='action-container'
                    >
                        <React.Fragment>
                            <Form
                                onFieldsChange={this.onFieldsChange}
                                onFinish={this.onFinish}
                                onFinishFailed={this.onFinishFailed}
                            >
                                <Row justify='space-between' align='middle'>
                                    <Col className='slot-input'>
                                        <Form.Item
                                            name='slotOne'
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Required!'
                                                }
                                            ]}
                                        >
                                            <Select>
                                                <Option value='1'>1</Option>
                                                <Option value='2'>2</Option>
                                                <Option value='3'>3</Option>
                                                <Option value='4'>4</Option>
                                                <Option value='5'>5</Option>
                                                <Option value='6'>6</Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col className='slot-input'>
                                        <Form.Item
                                            name='slotTwo'
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Required!'
                                                }
                                            ]}
                                        >
                                            <Select>
                                                <Option value='1'>1</Option>
                                                <Option value='2'>2</Option>
                                                <Option value='3'>3</Option>
                                                <Option value='4'>4</Option>
                                                <Option value='5'>5</Option>
                                                <Option value='6'>6</Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col className='slot-input'>
                                        <Form.Item
                                            name='slotThree'
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Required!'
                                                }
                                            ]}
                                        >
                                            <Select>
                                                <Option value='1'>1</Option>
                                                <Option value='2'>2</Option>
                                                <Option value='3'>3</Option>
                                                <Option value='4'>4</Option>
                                                <Option value='5'>5</Option>
                                                <Option value='6'>6</Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col className='slot-input'>
                                        <Form.Item
                                            name='slotFour'
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Required!'
                                                }
                                            ]}
                                        >
                                            <Select>
                                                <Option value='1'>1</Option>
                                                <Option value='2'>2</Option>
                                                <Option value='3'>3</Option>
                                                <Option value='4'>4</Option>
                                                <Option value='5'>5</Option>
                                                <Option value='6'>6</Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row justify='center'>
                                    <Col span={24}>
                                        <Form.Item>
                                            <Button
                                                size='large'
                                                htmlType='submit'
                                                block
                                            >
                                                Submit Code
                                            </Button>
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Form>
                        </React.Fragment>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default Board;
