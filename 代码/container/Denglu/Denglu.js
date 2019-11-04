import './denglu.css'
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Denglu extends Component {
    render() {
        return (
            <div className='all3'>
                <div className="group">用户名<input  className="input-xlarge"/></div>
                <div className="group">密码<input className="input-xlarge"/></div>
                <div className="denglu">
                     <button className="submit">登录</button>
                        <Link to="/"><span class="span1">通过 Github 登录</span></Link> 
                     <div style={{padding:'5'}}>忘记密码了？</div>
                </div>
            </div>
        )
    }
}
