import React, { Component } from 'react'
import { Carousel } from 'antd'
import jpg1 from '../../img/1.JPG'
import jpg2 from '../../img/2.JPG'
import jpg3 from '../../img/3.JPG'
import jpg4 from '../../img/4.JPG'
import jpg5 from '../../img/5.JPG'
import  './style.css';

export default class Home extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <div className='m-caro' >
                <Carousel autoplay arrows={true} >
                    <div>
                    <img src={jpg1} alt='' className='m-carl_img' ></img>
                    </div>
                    <div>
                    <img src={jpg2} alt='' className='m-carl_img' ></img>
                    </div>
                    <div>
                    <img src={jpg3} alt='' className='m-carl_img' ></img>
                    </div>
                    <div>
                    <img src={jpg4} alt='' className='m-carl_img' ></img>
                    </div>
                    <div>
                    <img src={jpg5} alt='' className='m-carl_img' ></img>
                    </div>
                </Carousel>
                </div>
            </div>
        )
    }
}
