import React, { Component } from 'react'

export default class Right extends Component {
    render() {
        return (
            <div>
                <div className="right1">
                            <div className="inner">
                                <p>Cnode:Node.js专业中文社区</p>
                                <div>
                                    您可以<a href="">登录</a>或<a>注册</a>也可以<a href="/"><span className="span">通过 Github 登录</span></a>
                                </div>

                            </div>
                        </div>
                        <div className="right1">
                            <div className="inner1">
                                <a href="/"><img src="https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" /></a>
                                <a href="/"><img src="https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS"  className="img"/></a>
                                <a href="/"><img src="https://static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-" className="img"/></a>
                            </div>
                        </div>
            </div>
        )
    }
}
