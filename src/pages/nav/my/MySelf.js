import React, { Component } from 'react';
import './myself.scss';
import { List } from 'antd-mobile';
const Item = List.Item;
export default class MySelf extends Component {
	state = {
		thumbList: [
			{ thumb: '/积分.png', title: '积分兑换' },
			{ thumb: '/订阅.png', title: '我的订阅' },
			{ thumb: '/联系人.png', title: '微聊联系人' },
			{ thumb: '' },
			{ thumb: '/房贷工具.png', title: '房贷结算器' },
			{ thumb: '/房子.png', title: '我的房子' },
			{ thumb: '' },
			{ thumb: '/记录.png', title: '我的看房记录' },
			{ thumb: '/_问答2.png', title: '我的问答' },
			{ thumb: '' },
			{ thumb: '/设置.png', title: '设置' },
			{ thumb: '/意见反馈.png', title: '意见反馈' },
		],
		iconList: [
			{ balance: 10, icon: '/钱包.png', title: '钱包' },
			{ balance: 20, icon: '/优惠券.png', title: '优惠' },
			{ balance: 30, icon: '/积分.png', title: '积分' },
		],
	};
	render() {
		return (
			<div className="myselfbox">
				<div className="top-myself">
					{/* 上面头像等部分 */}
					<div className="topimg-btn">
						<div className="leftheader">
							<img src={require('../../../assets/imgs/chat/icon-hader.jpg')} />
						</div>
						<div className="right-info">
							<div className="login-regBtn">
								<div className="login-left">
									<p onClick={this.loginTo.bind(this)}>登录/</p>
									<p onClick={this.regTo.bind(this)}>注册</p>
								</div>
								<img src={require('../../../assets/imgs/myself/设置.png')} />
							</div>
							<div className="chatinfo">可以与店家老板直接聊天</div>
						</div>
					</div>
					{/* 下面钱包优惠券 */}
					<div className="top-icons">
						{this.state.iconList.map(val => {
							return (
								<div className="leftmoney" key={val.title}>
									<p>{val.balance}</p>
									<div className="icon-mon">
										<img src={require('../../../assets/imgs/myself' + val.icon)} />
										<p>{val.title}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				{/* 下面菜单列表部分 */}
				<div className="botton-menuInfo">
					<List>
						{this.state.thumbList.map(obj => {
							if (obj.thumb !== '') {
								return (
									<Item
										key={obj.title}
										thumb={require('../../../assets/imgs/myself' + obj.thumb)}
										arrow="horizontal"
										onClick={() => {}}
									>
										{obj.title}
									</Item>
								);
							}
              else return <div style={{ height: 10, backgroundColor: '#F4F4F4' }}></div>;
						})}
					</List>
				</div>
			</div>
		);
	}

	//登录
	loginTo() {
		window.location.href = '#/login';
	}
	//注册
	regTo() {
		window.location.href = '#/reg';
	}
}
