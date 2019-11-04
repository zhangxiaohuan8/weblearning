import React, { Component } from 'react'
import {Link,Route,Redirect} from 'react-router-dom'
import All from './All/All';
import Jinghua from './Jinghua/Jinghua';
import Fenxiang from './Fenxiang/Fenxiang';
import Job from './Job/Job';
import Ask from './Ask/Ask';
import Dev from './Dev/Dev';
import './home.css'
export default class Home extends Component {
    render() {
        // let {url}=this.props.match.url;
        // console.log(url);
        return (
            <div>
                <div className='all'>
                    {/* <Link to={`${url}/all`}>全部</Link> */}
                    <Link to='/home/all'>全部</Link>
                    <Link to= '/home/jinghua'>精华</Link>
                    <Link to='/home/fenxiang'>分享</Link>
                    <Link to='/home/ask'>问答</Link>
                    <Link to='/home/job'>招聘</Link>
                    <Link to='/home/dev'>客户端测试</Link>
                </div>
                <div>
                    <Route path="/home" render={()=><Redirect from="/home" to="/home/all"/>}/>
                    <Route exact path='/home/all' component={All}/>
                    <Route exact path='/home/jinghua' component={Jinghua}/>
                    <Route exact path='/home/fenxiang' component={Fenxiang}/>
                    <Route exact path='/home/ask' component={Ask}/>
                    <Route exact path='/home/job' component={Job}/>
                    <Route exact path='/home/dev' component={Dev}/>
                    <Route path={'/home/all/:id'} component={All}/>
                    <Route path={'/home/jinghua/:id'} component={Jinghua}/>
                    <Route path={'/home/fenxiang/:id'} component={Fenxiang}/>
                    <Route path={'/home/ask/:id'} component={Ask}/>
                    <Route path={'/home/job/:id'} component={Job}/>
                    <Route path={'/home/dev/:id'} component={Dev}/>
                </div>
            </div>
        )
    }
}
