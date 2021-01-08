import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserContext from './contexts/UserContext';
import Reg from './views/Reg';
import Main from './views/Main';
import Login from './views/Login';

function App() {
    const [logged, setLogged] = useState(null);

    return (
        <UserContext.Provider value={{ logged, setLogged }}>
            <main>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Reg} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/dashboard" exact component={Main} />
                    </Switch>
                </Router>
            </main>
        </UserContext.Provider>
    )
}

export default App