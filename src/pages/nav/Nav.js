import React, { Component } from 'react';

// import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import Chat from '../nav/chat/Chat';
import History from '../nav/history/History';
import MySelf from '../nav/my/MySelf';
import Home from '../nav/Home';
import { TabBar } from 'antd-mobile';

export default class Nav extends Component {
	state = {
		selectedTab: 'Home',
		tabbarList: [
			{ title: '首页', key: 'Home', icon: 'index', icons: 'icon-index', pageText: <Home /> },
			{ title: '微聊', key: 'Chat', icon: 'chat', icons: 'icon-chat', pageText: <Chat /> },
			{ title: '足迹', key: 'History', icon: 'history', icons: 'icon-history', pageText: <History /> },
			{ title: '我的', key: 'Myself', icon: 'myself', icons: 'icon-myself', pageText: <MySelf /> },
		],
	};

	render() {
		return (
			<div>
				<div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
					<TabBar
						unselectedTintColor="#949494" //未选中字体颜色
						tintColor="#33A3F4" //选中字体颜色
						barTintColor="white" // 底栏背景色
					>
						{this.state.tabbarList.map(obj => {
							return (
								<TabBar.Item
									key={obj.title}
									title={obj.title}
									key={obj.key}
									icon={
										<div
											style={{
												width: '22px',
												height: '22px',
												background: `url(${require('../../assets/imgs/' +
													obj.icon +
													'.png')}) center center /  21px 21px no-repeat`,
											}}
										/>
									}
									selectedIcon={
										<div
											style={{
												width: '22px',
												height: '22px',
												background: `url(${require('../../assets/imgs/' +
													obj.icons +
													'.png')}) center center /  21px 21px no-repeat`,
											}}
										/>
									}
									selected={this.state.selectedTab === obj.key}
									onPress={() => {
										this.setState({
											selectedTab: obj.key,
										});
									}}
								>
									{obj.pageText}
								</TabBar.Item>
							);
						})}
					</TabBar>
				</div>
			</div>
		);
	}
}
