import React, { Component } from 'react'

// import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import Chat from '../nav/chat/Chat' 
import History from '../nav/history/History' 
import MySelf from '../nav/my/MySelf' 
import Home from '../nav/Home' 
import { TabBar } from 'antd-mobile'



export default class Nav extends Component {

    state = {
      selectedTab: 'Home',
    }

    render() {
        return (
        <div>
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494" //未选中字体颜色
          tintColor="#33A3F4" //选中字体颜色
          barTintColor="white"// 底栏背景色
        >
          <TabBar.Item
            title="首页"
            key="Home"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${require('../../assets/imgs/index.png')}) center center /  21px 21px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${require('../../assets/imgs/icon-index.png')}) center center /  21px 21px no-repeat` }}
            />
            }
            selected={this.state.selectedTab === 'Home'}
            onPress={() => {
              this.setState({
                selectedTab: 'Home',
              });
            }}
          >
            {this.renderContent( <Home />)}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${require('../../assets/imgs/chat.png')}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${require('../../assets/imgs/icon-chat.png')}) center center /  21px 21px no-repeat` }}
              />
            }
            title="微聊"
            key="Chat"
            selected={this.state.selectedTab === 'chat'}
            onPress={() => {
              this.setState({
                selectedTab: 'chat',
              });
            }}
          >
            {this.renderContent( <Chat />)}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${require('../../assets/imgs/history.png')}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${require('../../assets/imgs/icon-history.png')}) center center /  21px 21px no-repeat` }}
              />
            }
            title="足迹"
            key="History"
            selected={this.state.selectedTab === 'history'}
            onPress={() => {
              this.setState({
                selectedTab: 'history',
              });
            }}
          >
            {this.renderContent(<History />)}
          </TabBar.Item>

          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${require('../../assets/imgs/myself.png')}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${require('../../assets/imgs/icon-myself.png')}) center center /  21px 21px no-repeat` }}
              />
            }
            title="我的"
            key="Myself"
            selected={this.state.selectedTab === 'myself'}
            onPress={() => {
              this.setState({
                selectedTab: 'myself',
              });
            }}
          >
            {this.renderContent( <MySelf />)}
          </TabBar.Item>
        </TabBar>
      </div>
            </div>
        )
    }
        renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
      <div>{pageText}</div>
      </div>
    );
  }
}
