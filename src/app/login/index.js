import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { API_SERVER } from '../../constant/apis'
import { onLogin }  from '../../component/IsLogin/index';
import axios from 'axios';

import "./style.css";

export default class Login extends Component {
  
  //登录函数
  onFinish = (values) => {
    axios.post(`${API_SERVER}/api/login`,{
       ...values
    }).then(response=>{
      console.log(response.status)
      if (response.status == 200){
        onLogin(values.username)
        alert('登陆成功')
        this.props.history.push("")
      }else{
        alert('密码错误！！！')
      }
    })
  }

  render() {
    return (
      <div className="m-login">
        <Form
          name="normal_login"
          className="login-form"
          onFinish={this.onFinish}
          // initialValues={{ remember: true }}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>记住我</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ marginBottom: "10px" }}
            >
              登录
            </Button>
            或者 <a href={"regi"}>现在注册!</a>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
