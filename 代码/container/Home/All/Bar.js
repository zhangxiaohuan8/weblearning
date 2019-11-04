import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import { Item } from 'rc-menu';
export default class Bar extends React.Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
         
    }
    componentDidMount(){
       
        let page = this.props.match.params.id;
        console.log(page);
        fetch('https://cnodejs.org/api/v1/topic/'+page)
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res);
                this.setState({
                    data: res.data
                });
            })
    }
     
    render() {
        console.log(this.state.data);
        return (
            <div className="all1">
                <ul className="ul">
                {
                    <div className="title"> 
                        <div className="wenda">置顶</div>
                        <div className="title2">{this.state.data.title}</div>
                        <li className="title1">发布于6个月之前</li>
                        <li className="title1">作者atian25</li>
                        <li className="title1">142241次浏览</li>
                        <li className="title1">来自分享</li>
                    </div>
                }
                {
                    <div dangerouslySetInnerHTML={{__html:this.state.data.content}}></div>
                }
                </ul>
            </div>
        )
    }
}
