import React, { Component } from "react";
import "./style.css";
import p1 from '../../img/p1.png';
import basic from '../../img/basic.svg';
import p3 from '../../img/p3.jpg';
import p4 from '../../img/p4.PNG';
import comeout from '../../img/comeout.svg';
import award from '../../img/award.svg';

export default class Pers extends Component {

  state = {
    show1 : true,
    show2 : false,
    show3 : false
  }

  ch1 = (e)=>{
    this.setState({show1:true,show2:false,show3:false})
  }

  ch2 = ()=>{
    this.setState({show1:false,show2:true,show3:false})
  }

  ch3 = ()=>{
    this.setState({show1:false,show2:false,show3:true})
  }

  render() {

    const {show1,show2,show3} = this.state

    return (
      <div className='g-main' >
        <div>
          <div className="g-tab">个人简介</div>
          <ul className="g-op">
            <li onClick={this.ch1} >基本信息</li>
            <li onClick={this.ch2} >出道经历</li>
            <li onClick={this.ch3} >主要成就</li>
          </ul>
        </div>

        <div className="g-box">
          <div className="m-cnt"  style={{display:show1 ? 'block' : 'none' }}  >
            <div>
              <div className="u-title">
                <img src={basic}></img>
                <h3>基本信息</h3>
              </div>
              <div>
                <ul>
                  <li>中文名：周杰伦</li>
                  <li>外文名：Jay Chou/Chou Jie Lun/Chow Chieh-lun </li>
                  <li>别名：周董/President Chou/小公举</li>
                  <li>国籍：中国</li>
                  <li>民族：汉族</li>
                  <li>出生地：台湾省新北市</li>
                  <li>出生日期：1979年1月18日</li>
                  <li>星座：摩羯座</li>
                  <li>血型：O型</li>
                  <li>身高：175 cm</li>
                  <li>毕业院校：淡江中学</li>
                  <li>职业：歌手、音乐人、演员、导演、编剧</li>
                  <li>经纪公司：杰威尔音乐有限公司</li>
                </ul>
              </div>
            </div>
            <div style={{position:'absolute',top:'0',right:'0'}} >
              <div className="u-img">
                <img src={p3}></img>
              </div>
            </div>
          </div>
          <div className="m-cnt" style={{display:show2 ? 'block' : 'none' }} >
            <div>
              <div className="u-title">
                <img src={comeout}></img>
                <h3>出道经历</h3>
              </div>
              <p>
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;十八岁高中毕业后在一家高级餐厅做服务生，后来一位学妹偷偷地帮他报名参加《超级新人王》而被吴宗宪挖掘，签约了阿尔发唱片公司，专职就是写歌，两万一首。但是没有歌手愿意唱他的歌，说他的曲风太奇怪了，也有一些欣赏他作品的歌手，但是还是不敢唱，怕粉丝不接受，没有市场。当时吴宗宪都快对他绝望了，给他下了最后通牒，叫他在十天之内写好五十首歌曲，他去拿给一些歌手唱，如果再没有人唱就卷铺盖走人。当时他听完这句话做的第一件事就是去便利店买了一箱泡面，在录音室里呆了十天没有出来，吃了写，写了吃。十天后，五十首歌出来了，结果还是没有人唱。然后他做了一个惊人的决定：“既然没有人唱，那我自己唱”。三个月后，他的第一张专辑《JAY》问世，从而轰动整个乐坛。一种叫做“杰伦现象”的说法开始蔓延……
              </p>
            </div>
          </div>
          <div className="m-cnt" style={{display:show3 ? 'block' : 'none' }} >
            <div>
              <div className="u-title">
                <img src={award}></img>
                <h3>主要成就</h3>
              </div>
              <ul>
                <li>获得十五座金曲奖</li>
                <li>两届台湾金曲奖最佳国语男歌手奖</li>
                <li>四届世界音乐大奖最畅销中华区艺人奖</li>
                <li>两届MTV亚洲大奖最受欢迎艺人奖</li>
                <li>四届新加坡金曲奖最受欢迎男歌手奖</li>
                <li>两次获得台湾金曲奖最佳年度歌曲奖</li>
                <li>四次获得台湾金曲奖最佳国语专辑奖</li>
                <li>大中华区8次年度唱片销量冠军</li>
                <li>连续7年获得IFPI香港唱片销量大奖十大销量国语唱片</li>
                <li>三次获得台湾金曲奖最佳作曲人奖</li>
                <li>2010年MP3下载量全球第三</li>
                <li>2009年悉尼演唱会票房 公告牌 全球第二</li>
                <li>台湾电影金马奖 最佳新演员奖</li>
                <li>香港电影金像奖 最佳新演员奖</li>
                <li>入选美国 CNN 亚洲25位最具影响力人物 </li>
                <li>《Fast Company》全球百大创意人物</li>
                <li>2020年福布斯中国名人榜第4名 </li>
              </ul>
            </div>
            <div>
              <div className="u-img" style={{position:'absolute',top:'0',right:'0'}} >
                <img src={p4}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
