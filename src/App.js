import React from 'react';
import Board from './components/Board';

const App = () => {
    return (
        <div className='container'>
            <div className='title'>Mastermind</div>
            <Board />
        </div>
    );
};

export default App;
