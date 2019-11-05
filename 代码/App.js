import React, { Component } from 'react'
import Header from'./components/Header';
import Footer from'./components/Footer';
import Right from'./components/Right';
import {HashRouter as Router,Route,Switch,Redirect}from'react-router-dom';
import Start from './container/Start/Start';
import Home from './container/Home/Home';
import Api from './container/Api/Api';
import About from './container/About/About';
import Denglu from './container/Denglu/Denglu';
import Bar from './container/Home/All/Bar';
import All from './container/Home/All/All';
import Jinghua from './container/Home/Jinghua/Jinghua';
import Fenxiang from './container/Home/Fenxiang/Fenxiang';
export default class App extends Component {
    render() {
        return (
            <Router basename="/weblearning">
                <div>
                    <Header/>
                </div>
                <div className="content">
                    <div className="left">
                    <Switch> 
                        <Route path='/home' component={Home}/>
                        <Route path='/start' component={Start}/>
                        <Route path='/api' component={Api}/>
                        <Route path='/about' component={About}/>
                        <Route path='/denglu' component={Denglu}/>
                        <Route path={'/:id'} component={Bar}/>
                        <Route path="/" render={()=><Redirect from ='/' to ='/home/all'/>}/>
                    </Switch>
                    </div>
                    <div className="right">
                        <Right />
                    </div>
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </Router>
            
        )
    }
}