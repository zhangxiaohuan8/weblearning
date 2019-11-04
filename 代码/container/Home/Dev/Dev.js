import React from 'react';
import {Link,Route,NavLink} from 'react-router-dom'
import Fenxiang from '../Fenxiang/Fenxiang';
import '../home.css'
// 无状态组件
export default class Content extends React.Component{
    constructor(){
        super();
        this.state = {
            data: []
        }
         
    }
    componentDidMount(){
       
        let page = this.props.match.params.id;
        console.log(page);
        fetch('https://cnodejs.org/api/v1/topics?tab=dev&&page='+page)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({
                    data: res.data
                });
            })
    }
    componentDidUpdate(prevProps,prevState){{/**prevProps前一个的属性 */}
        if(prevProps.match.params.id!=this.props.match.params.id){
            let page = this.props.match.params.id;
            console.log(page);
            fetch('https://cnodejs.org/api/v1/topics?tab=dev&&page='+page)
                .then((res)=>res.json())
                .then((res)=>{
                    this.setState({
                        data: res.data
                    });
                })
        }
    }
    render(){
        console.log(this.state.data);
        return (
            <div className='all1'>
                {
                    this.state.data.map((item)=>(
                        <div className="all2" key={item.id}>
                            <img src={item.author.avatar_url}/>
                            <div style={{float:'left',padding:'5px',color:'gray'}}>{item.reply_count}</div>
                            <div className="visit">/{item.visit_count}</div>
                            <div className="wenda">测试</div>
                            <Link to={'/'+item.id}><div>{item.title}</div></Link>
                        </div>
                        
                    ))
                }
                 {
                     <ul className="xiamian1">{
                        [1,2,3,4,5,6,7,8].map((item)=>(
                            <Link to={'/home/all/'+item}> 
                                <li key={item} className="xiamian">
                                    {item} 
                                </li>
                            </Link>
                        ))
                     }
                    </ul>
                }
            </div>
        )
    }
}
