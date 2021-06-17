import React, { Component } from 'react'
import './style.css'
import play from '../../img/play.png';
import { API_SERVER } from '../../constant/apis'
import axios from "axios";

export default class Album extends Component {

    state={
        name:[],
        imgurl:[]
    }

    componentDidMount(){
        axios.post(`${API_SERVER}/api/album`,{}).then(response=>{
            // console.log(response);
            for (let i=0;i<response.data.content.length;i++){
                this.state.name.push(response.data.content[i].name)
                this.state.imgurl.push(response.data.content[i].img)
            }
        }).then(()=>{
            console.log(this.state.name);
            console.log(this.state.imgurl);
        })
        
    }

    go = ()=>{
        this.props.history.push("info")
    }

    render() {

        const {name,imgurl} = this.state

        return (
            <div className='m-con' >
                {name.map((item,i)=>
                    <a className="m-coll" onClick={this.go} target="_blank" key={i} >
                        <img src={`${API_SERVER}/${imgurl[i]}`} alt="" className="m-img"></img>
                        <img src={play} alt="" className="m-play"></img>
                        <span className="cll-name" key={i} >{item}</span>
                    </a>
                )}
            </div>
        )
    }
}
