import React, { Component } from "react";
import {
  Comment,
  Tooltip,
  List,
  Avatar,
  Form,
  Button,
  Input,
  Pagination,
} from "antd";
import moment from "moment";
import { API_SERVER } from "../../constant/apis";
import { loginUser, getAvatar } from "../../component/IsLogin/index";
import axios from "axios";

//发表评论

const { TextArea } = Input;

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />{" "}
    </Form.Item>{" "}
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Comment{" "}
      </Button>{" "}
    </Form.Item>{" "}
  </>
);

export default class board extends Component {
  //发表评论
  state = {
    comments: [],
    submitting: false,
    value: "",
    //评论区数据
    data: [[]],
    datanow:[],
    page:1,
    test: true,
    len:0,
    user: "",
    //头像地址
    avaimg: "",
  };

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    axios
      .post(`${API_SERVER}/api/board/add`, {
        value: this.state.value,
        author: this.state.user,
        datetime: new Date(),
        id: new Date().getTime(),
      })
      .then((response) => {
        if (response.status === 200) {
          alert("留言成功");
          window.location.reload()
        } else {
          alert("留言失败！！");
        }
      });

    this.setState({
      submitting: false,
    });
    this.componentDidMount()
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  changeUrl = (data) => {
    let urlarr = data.split("//");
    let url = API_SERVER;
    for (let i = 2; i < urlarr.length; i++) {
      url += "/";
      url += urlarr[i];
    }
    return url;
  };

  changeDate = (data) => {
    return data.substring(0, 10) + " " + data.substring(11, 19);
  };

  //获取评论列表
  componentDidMount() {
    axios.post(`${API_SERVER}/api/board`, {}).then((response) => {
      // console.log(response.data.content);
      for (let i = response.data.content.length-1; i >= 0;) {
        let arr = []
        let j=0
        while ( i>=0 && j<10 ){
        arr.push({
          actions: [<span key="comment-list-reply-to-0"> Reply to </span>],
          author: `${response.data.content[i].name}`,
          avatar: `${this.changeUrl(response.data.content[i].avatar)}`,
          content: <p>{`${response.data.content[i].content}`} </p>,
          datetime: (
            <Tooltip
              title={moment().subtract(1, "days").format("YYYY-MM-DD HH:mm:ss")}
            >
              <span> {response.data.content[i].date} </span>{" "}
            </Tooltip>
          ),
        });
        i--;
        j++;
      }
        this.state.data.push(arr)
      }
      this.setState({ user: loginUser(), avaimg: getAvatar(),len:response.data.datalength,datanow:this.state.data[this.state.page] });
      //强制渲染
      this.forceUpdate();
    });
  }

  onChange = pageNumber => {
    // console.log(this.state.data);
    this.setState({page:pageNumber,datanow:this.state.data[pageNumber]})
    this.forceUpdate();
    console.log('Page: ', pageNumber);
  }

  render() {
    const { comments, submitting, value, data, avaimg, len, datanow } = this.state;
    return (
      //发表评论
      <div style={{paddingBottom:'15px'}} >
        <Comment
          avatar={<Avatar src={avaimg} alt="Han Solo" />}
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
        {/* //评论区 */}{" "}
        <List
          className="comment-list"
          header={`${datanow.length} boards`}
          itemLayout="horizontal"
          dataSource={datanow}
          renderItem={(item) => (
            <li>
              <Comment
                //actions={item.actions}
                author={item.author}
                avatar={item.avatar}
                content={item.content}
                datetime={item.datetime}
              />{" "}
            </li>
          )}
        />{" "}
          <Pagination
            showQuickJumper
            defaultCurrent={1}
            total={len}
            onChange={this.onChange}
            style={{margin:'15px auto'}}
          />
      </div>
    );
  }
}
