import React, { Component } from 'react'
import {withRouter} from "react-router-dom";
import './index.less'
import { Layout, Menu } from 'antd';

const { Header} = Layout;

class NavWrapper extends Component {

  constructor(props){
    super(props)

    this.state = {
      cur: ''
    }
  }

  doMenu = (e) => {
    this.setState({ cur: e.key })
    this.props.history.push(e.key)
  }

  render(){

    const { cur } = this.state

    return (
    <div className="layout">
    <Header style={{ zIndex: 1, width: '90%',backgroundColor:'white',margin:'0 auto' }} className="m-nav" >
      <div className="logo">
        <label className='u-name'>Jay周氏情歌</label>
      </div>
      <Menu theme="light" 
            mode="horizontal" 
            selectedKeys={[cur]}
            onClick={this.doMenu} 
            >
        <Menu.Item key="">首页</Menu.Item>
        <Menu.Item key="pers">个人简介</Menu.Item>
        <Menu.Item key="album">专辑</Menu.Item>
        <Menu.Item key="play">在线播放</Menu.Item>
      </Menu>
    </Header>
    <div className="site-layout-content">
       {this.props.children}
    </div>
  </div>
    )
  }
}

export default withRouter(NavWrapper)
