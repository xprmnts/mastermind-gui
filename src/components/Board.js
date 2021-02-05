import React from 'react';
import { Row, Col, Button, Table, InputNumber, Select, Form } from 'antd';

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
                title: 'Result',
                dataIndex: 'result',
                key: 'result'
            }
        ];
        this.state = {
            history: [],
            count: 0
        };
    }

    handleAdd = () => {
        const { count, history, slots } = this.state;
        //slots = {...slots, }
        this.setState({
            history: [...history, slots],
            count: count + 1
        });
    };

    onFinish = values => {
        const { count, history } = this.state;
        values.key = count + 1;
        values.attempt = count + 1;

        this.setState({
            history: [...history, values],
            count: count + 1
        });
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

// const columns = [
//     {
//         title: 'Att. #',
//         dataIndex: 'attempt',
//         key: 'attempt'
//     },
//     {
//         title: '-',
//         dataIndex: 'slotOne',
//         key: 'slotOne'
//     },
//     {
//         title: '-',
//         dataIndex: 'slotTwo',
//         key: 'slotTwo'
//     },
//     {
//         title: '-',
//         dataIndex: 'slotThree',
//         key: 'slotThree'
//     },
//     {
//         title: '-',
//         dataIndex: 'slotFour',
//         key: 'slotFour'
//     },
//     {
//         title: 'Result',
//         dataIndex: 'result',
//         key: 'result'
//     }
// ];

// const Board = () => {
//     const [tableData, setTableData] = useState([]);

//     useEffect(() => {
//         setTableData(tableData);
//     }, [tableData]);

//     return (
//         <React.Fragment>
//             <Table
//                 dataSource={tableData}
//                 columns={columns}
//                 pagination={false}
//             />
//             <Row justify='center'>
//                 <Col span={16}>
//                     <Button
//                         size='large'
//                         type='primary'
//                         onClick={() => {
//                             useState()
//                         }}
//                     >
//                         Submit Code
//                     </Button>
//                 </Col>
//             </Row>
//         </React.Fragment>
//     );
// };

// export default Board;
