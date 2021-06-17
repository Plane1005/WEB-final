import React, { Component } from 'react'
import {withRouter} from "react-router-dom";
import './index.less'
import { Layout, Menu, Avatar, Button } from 'antd';
import { UserOutlined,LogoutOutlined } from '@ant-design/icons';
import { loginUser, saveAvatar, logout }  from '../../component/IsLogin/index';
import axios from 'axios';
import { API_SERVER } from '../../constant/apis'


const { Header} = Layout;

class NavWrapper extends Component {

  constructor(props){
    super(props)

    this.state = {
      cur: '',
      show:false,
      imgurl:'',
      username:'',
      showname:false,
      showout:false
    }
  }

  doMenu = (e) => {
    this.setState({ cur: e.key })
    this.props.history.push(e.key)
  }

  login = ()=>{
    this.props.history.push("login")
  }

  componentDidMount(){
    console.log(loginUser());
    if (loginUser()!==undefined) {
      axios.post(`${API_SERVER}/api/init/getAvat`,{
        id:loginUser()
      }).then(response=>{
        if (response.data.url){
        let urlarr = response.data.url.split('//')
        // console.log(urlarr);
        let url = API_SERVER
        for (let i = 2; i < urlarr.length;i++){
          url+='/'
          url+=urlarr[i]
        }
        //console.log(response.data.url.split('//').join('\\'));
        if (url)  {
          this.setState({imgurl:url,show:false,username:response.data.username,showname:true,showout:true})
          saveAvatar(url)
        }
        // console.log(this.state.imgurl)
      }else{
          this.setState({show:false,username:response.data.username,showname:true,showout:true})
      }
      })
    }
  }

  backindex = ()=>{
    this.props.history.push("")
  }

  outlog = ()=>{
    // console.log('logout');
    logout()
    this.setState({showout:false})
    this.props.history.push("")
  }

  render(){

    const { cur,show,username,showname,showout } = this.state

    return (
    <div className="layout">
    <Header style={{ zIndex: 1, width: '90%',backgroundColor:'white',margin:'0 auto',position:'relative'}} className="m-nav" >
      <div className="logo">
        <label className='u-name' onClick={this.backindex} >Jay周氏情歌</label>
      </div>
      <Menu theme="light" 
            mode="horizontal" 
            selectedKeys={[cur]}
            onClick={this.doMenu} 
            style={{marginRight:'31vw'}}
            >
        <Menu.Item key="">首页</Menu.Item>
        <Menu.Item key="pers">个人简介</Menu.Item>
        <Menu.Item key="album">专辑</Menu.Item>
        <Menu.Item key="play">在线播放</Menu.Item>
        <Menu.Item key="board">留言板</Menu.Item>
      </Menu>
      <div className='m-islog' style={{display:show? 'block':'none' }}>未登录！请点击头像进行登录</div>
      <div className='m-islog' style={{display:show && showname? 'block':'none' }}>欢迎您！用户 {username}！
      </div>
      <Avatar size={40} icon={<UserOutlined />} src={this.state.imgurl}  className='u-avatar' onClick={this.login}  onMouseOver={()=>this.setState({show:true})} onMouseOut={()=>this.setState({show:false})} />
      <LogoutOutlined style={{fontSize:'25px',marginLeft:'10px',cursor:'pointer',display:showout ? 'block' : 'none'}} onClick={this.outlog} />
    </Header>
    <div className="site-layout-content">
       {this.props.children}
    </div>
  </div>
    )
  }
}

export default withRouter(NavWrapper)
