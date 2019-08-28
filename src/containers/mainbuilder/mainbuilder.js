import React , { Component } from 'react';
import Dashboard from '../MainContent/Dashboard/Dashboard';
import Help from '../MainContent/Dashboard/Help';
import AlatTerpinjam from '../MainContent/Dashboard/AlatTerpinjam';
import Peminjam from '../MainContent/Dashboard/Peminjam'
import Checkout from '../MainContent/Dashboard/Checkout'
import Logout from '../MainContent/Dashboard/Logout'

import { Route,Switch } from 'react-router-dom';
class mainbuilder extends Component{
    render(){
        return(
                <Switch>
                    <Route path="/" exact component={Dashboard} />  
                    <Route path="/help" component={Help}/>
                    <Route path="/alat-terpinjam" component={AlatTerpinjam}/>
                    <Route path="/peminjam" component={Peminjam}/>
                    <Route path="/checkout" component={Checkout}/>
                    <Route path="/logout" component={Logout}/>
                </Switch>
        );
    }
}

export default mainbuilder;