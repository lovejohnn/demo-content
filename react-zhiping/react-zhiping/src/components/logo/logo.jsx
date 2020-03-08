import React, { Component } from 'react'
import LogoImg from './images/1.jpg'
import './logo.css'

export default class Logo extends Component {
    constructor(props) {
        super(props);
        this.Img = React.createRef();
    }


    componentDidMount(){
        const ImgNode = this.Img.current;
        const propsState = this.props.type || '';
        if (propsState == 'nomal') {
            //设置图片为 40px
            ImgNode.style.width='240px'
            ImgNode.style.height='240px'
        }
        if (propsState == 'small') {
            //设置图片为 60px
            ImgNode.style.width='200px'
            ImgNode.style.height='200px'
        }
    }
    render() {
        return (
            <div className="logo-content">
                <img src={LogoImg} className="logo-img" ref={this.Img} />
            </div>
        )

    }
}