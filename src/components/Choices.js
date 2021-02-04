import React from 'react';
import { Row, Col, InputNumber, Button } from 'antd';

const Choices = () => {
    const onChange = value => {
        console.log('changed', value);
    };

    return (
        <React.Fragment>
            <Row justify='space-between' align='middle'>
                <Col className='slot-input'>
                    <InputNumber
                        min={1}
                        max={10}
                        defaultValue={3}
                        onChange={onChange}
                    />
                </Col>
                <Col className='slot-input'>
                    <InputNumber
                        min={1}
                        max={10}
                        defaultValue={3}
                        onChange={onChange}
                    />
                </Col>
                <Col className='slot-input'>
                    <InputNumber
                        min={1}
                        max={10}
                        defaultValue={3}
                        onChange={onChange}
                    />
                </Col>
                <Col className='slot-input'>
                    <InputNumber
                        min={1}
                        max={10}
                        defaultValue={3}
                        onChange={onChange}
                    />
                </Col>
            </Row>
            <Row justify='center'>
                <Col span={16}>
                    <Button size='large' type='primary'>
                        Submit Code
                    </Button>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Choices;
/*

*/
