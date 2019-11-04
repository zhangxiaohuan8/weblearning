import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer1">
                        <div className="links">
                            <a className="dark" href="/rss">RSS |</a>
                            <a class="dark" href="https://github.com/cnodejs/nodeclub/">源码地址</a>
                        </div>
                        <div className="col">
                            <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
                            <p>服务器赞助商为<a><img src="https://static.cnodejs.org/FuIpEaM9bvsZKnQ3QfPtBHWQmLM9" /></a>，存储赞助商为<a><img src="https://static.cnodejs.org/Fg0jtDIcTqVC049oVu5-sn6Om4NX" /></a>,由<a><img src="https://static.cnodejs.org/FpMZk31PDyxkC8yStmMQL4XroaGD" /></a>提供应用性能服务。
  </p>
                            <p>新手搭建 Node.js 服务器，推荐使用无需备案的<a href="https://www.digitalocean.com/?refcode=eba02656eeb3">DigitalOcean(https://www.digitalocean.com/)</a> </p>
                        </div>
                    </div>
            </div>
        )
    }
}
