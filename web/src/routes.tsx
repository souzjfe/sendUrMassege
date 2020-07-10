import React from 'react'
import {Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home';
import Chat from './pages/Chat';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component = {Home} path="/" exact />
            <Route component = {Chat} path="/chat/:name"/>
        </BrowserRouter>
    );

}

export default Routes;