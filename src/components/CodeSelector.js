import React from 'react';
import { Row, Col, Button, Select, Form } from 'antd';
import options from '../assets/codeOptions';

class CodeSelector extends React.Component {
    constructor(props) {
        super(props);

        const { Option } = Select;

        this.renderedSelectOptions = options.map((option, index) => {
            return (
                <Option key={index} value={`${option.value}`}>
                    {option.icon}
                </Option>
            );
        });
    }

    formItemsGenerator = () => {
        const items = [];
        for (let i = 0; i < 4; i++) {
            items.push(
                <Col className='slot-input' key={i}>
                    <Form.Item
                        name={`slot${i + 1}`}
                        rules={[
                            {
                                required: true,
                                message: 'Required!'
                            }
                        ]}
                    >
                        <Select>{this.renderedSelectOptions}</Select>
                    </Form.Item>
                </Col>
            );
        }
        return items;
    };

    render() {
        const renderedFormItems = this.formItemsGenerator();

        return (
            <Form onFinish={this.props.updateHistory}>
                <Row justify='space-between' align='middle'>
                    {renderedFormItems}
                </Row>
                <Form.Item>
                    <Button size='large' htmlType='submit' block>
                        Submit Code
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default CodeSelector;
