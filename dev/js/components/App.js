import React from 'react';
import Home from '../containers/Home';
import RequestForm   from '../containers/RequestForm';
import Nav_bar from './Nav_bar';
import {BrowserRouter, Route} from "react-router-dom"
import {store} from "../index";

require('../../scss/style.scss');

const App = () =>
{
    store.class_requests = []; //initial setting the store requests
    store.showList = true;
    store.popUp = false;
    store.cur_req = {}; //current request to be filled in the gant [from RequestList to GantForm]

    return (
    <BrowserRouter>
    <div>
        <Nav_bar />
        <Route exact path='/' component={Home}/>
        <Route path='/request' component={RequestForm}/>
    </div>
    </BrowserRouter>
)};

export default App;
