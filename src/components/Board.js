import React from 'react';
import { Table } from 'antd';

const dataSource = [
    {
        key: '1',
        attempt: 1,
        slotOne: 1,
        slotTwo: 2,
        slotThree: 3,
        slotFour: 4,
        result: '1,1'
    },
    {
        key: '2',
        attempt: 1,
        slotOne: 1,
        slotTwo: 2,
        slotThree: 3,
        slotFour: 4,
        result: '1,1'
    },
    {
        key: '3',
        attempt: 1,
        slotOne: 1,
        slotTwo: 2,
        slotThree: 3,
        slotFour: 4,
        result: '1,1'
    },
    {
        key: '4',
        attempt: 1,
        slotOne: 1,
        slotTwo: 2,
        slotThree: 3,
        slotFour: 4,
        result: '1,1'
    },
    {
        key: '5',
        attempt: 1,
        slotOne: 1,
        slotTwo: 2,
        slotThree: 3,
        slotFour: 4,
        result: '1,1'
    },
    {
        key: '6',
        attempt: 1,
        slotOne: 1,
        slotTwo: 2,
        slotThree: 3,
        slotFour: 4,
        result: '1,1'
    },
    {
        key: '7',
        attempt: 1,
        slotOne: 1,
        slotTwo: 2,
        slotThree: 3,
        slotFour: 4,
        result: '1,1'
    },
    {
        key: '8',
        attempt: 1,
        slotOne: 1,
        slotTwo: 2,
        slotThree: 3,
        slotFour: 4,
        result: '1,1'
    },
    {
        key: '9',
        attempt: 1,
        slotOne: 1,
        slotTwo: 2,
        slotThree: 3,
        slotFour: 4,
        result: '1,1'
    },
    {
        key: '10',
        attempt: 1,
        slotOne: 1,
        slotTwo: 2,
        slotThree: 3,
        slotFour: 4,
        result: '1,1'
    }
];

const columns = [
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

const Board = () => {
    return (
        <Table dataSource={dataSource} columns={columns} pagination={false} />
    );
};

export default Board;
