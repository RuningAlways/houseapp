import React, { Component } from 'react'
import './chat.scss'
import { Button } from 'antd-mobile';

export default class Chat extends Component {
    render() {
        return (
            <div className="chatpage">
                <div className='chatbox'>
                    <p className='imgHeader'>
                        <img src={require('../../../assets/imgs/chat/icon-hader.jpg')}/>
                    </p>
                    <div className='counselorName'>置业顾问：<span style={{color:'#1296db'}}>张无忌</span></div>
                    <div className='counselorName'>专业竭诚为你服务</div>
                    <Button type="primary" inline size="small" style={{ marginRight: '4px' }}>我要聊天</Button>
                </div>
            </div>
        )
    }
}
