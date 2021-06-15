import React, { Component } from "react";
import { Upload, message, Button } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { loginUser }  from '../../component/IsLogin/index';
import { API_SERVER } from '../../constant/apis'

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isLt3M = file.size / 1024 / 1024 < 3;
  if (!isLt3M) {
    message.error('Image must smaller than 3MB!');
  }
  return isLt3M;
}

export default class Avat extends Component {
  state = {
    loading: false,
    name:`${loginUser()}`,
    isok:false
  };

  handleChange = (info) => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true, name:`${loginUser()}` });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) =>
        this.setState({
          imageUrl,
          loading: false,
          isok:true
        })
      );
    }
  };

  componentDidMount(){
    this.setState({name:`${loginUser()}`})
    console.log(this.state.name)
  }

  handleSubmit = ()=>{
    this.state.isok ? this.props.history.push("") : alert('图片上传失败')
  }

  render() {
    const { loading, imageUrl } = this.state;
    const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );

    return (
        <div style={{display:'flex',justifyContent:'center',flexFlow:'column',alignItems:'center'}} >
            <h1 style={{margin:'20px 0'}} >请在此处上传您的头像吧</h1>
      <div>
      <Upload
        name={this.state.name}
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action={`${API_SERVER}/api/login/upload`}
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
        ) : (
          uploadButton
        )}
      </Upload>
      </div>
      <Button type="primary" size="large" style={{ marginTop:'30px' }} onClick={this.handleSubmit} >
          提交
        </Button>
      </div>
    );
  }
}
