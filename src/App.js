import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Board from './components/Board';
import Homepage from './components/Homepage';
import Instructions from './components/Instructions';

import './css/App.less';

const _defaultAttempts = 10;
const _defaultChoices = 6;
const _defaultPegs = 4;

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/instructions'>
                    <Instructions />
                </Route>
                <Route path='/game'>
                    <Board
                        choices={_defaultChoices}
                        pegs={_defaultPegs}
                        attempts={_defaultAttempts}
                    />
                </Route>
                <Route path='/'>
                    <Homepage />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
