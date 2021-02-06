import React from 'react';
import { Row, Col, Table } from 'antd';
import CodeSelector from './CodeSelector';
import options from '../assets/codeOptions';
import { generateSecretCode } from '../helpers/generateSecretCode.js';
import { validateGuess } from '../helpers/validateGuess.js';

import columns from '../assets/tableHeader';

class Board extends React.Component {
    constructor(props) {
        super(props);

        this.secret = generateSecretCode(this.props.pegs, this.props.choices);

        this.state = {
            history: [],
            attempts: this.props.attempts,
            count: 0,
            columns: columns
        };
    }

    updateHistory = values => {
        const { count, history, attempts } = this.state;

        if (attempts <= 0) {
            window.alert('are out of attempts!');
            return;
        }

        const guess = [
            Number(values.slot1),
            Number(values.slot2),
            Number(values.slot3),
            Number(values.slot4)
        ];

        const { success, exactMatchCount, partialMatchCount } = validateGuess(
            guess,
            this.secret
        );

        for (let i = 1; i < 5; i++) {
            options.forEach(option => {
                console.log(option.value, Number(values['slot' + i]));
                if (option.value === Number(values['slot' + i])) {
                    values['slot' + i] = option.icon;
                }
            });
        }

        values.key = count + 1;
        values.exact = exactMatchCount;
        values.partial = partialMatchCount;

        // Add Results to Table

        this.setState({
            history: [...history, values],
            count: count + 1,
            attempts: attempts - 1
        });

        if (success) {
            window.alert('You won!');
        }
    };

    render() {
        const { history, columns } = this.state;

        return (
            <React.Fragment>
                <Row gutter={[0, 16]} className='game-container'>
                    <Col xs={24} sm={24} className='table-container'>
                        <Table
                            pagination={false}
                            dataSource={history}
                            columns={columns}
                            bordered={false}
                        />
                    </Col>

                    <Col xs={24} sm={24} className='action-container'>
                        <CodeSelector updateHistory={this.updateHistory} />
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default Board;
