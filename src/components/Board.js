import React from 'react';
import { Row, Col, Button, Table, Select, Form } from 'antd';
import { validateGuess } from '../helpers/validateGuess.js';

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
                title: '-',
                dataIndex: 'slotOne',
                key: 'slotOne'
            },
            {
                title: '-',
                dataIndex: 'slotTwo',
                key: 'slotTwo'
            },
            {
                title: '-',
                dataIndex: 'slotThree',
                key: 'slotThree'
            },
            {
                title: '-',
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
            this.props.secret
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
            <div>
                <Table
                    pagination={false}
                    dataSource={history}
                    columns={columns}
                />
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
                                        { required: true, message: 'Required!' }
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
                                <Form.Item name='slotTwo'>
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
                                <Form.Item name='slotThree'>
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
                                <Form.Item name='slotFour'>
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
                            <Col span={16}>
                                <Form.Item>
                                    <Button
                                        size='large'
                                        type='primary'
                                        htmlType='submit'
                                    >
                                        Submit Code
                                    </Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </React.Fragment>
            </div>
        );
    }
}

export default Board;
