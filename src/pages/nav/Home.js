import React, { Component } from 'react';
import { WingBlank, Carousel, Grid } from 'antd-mobile';
import './home.scss';
import { gethouselist, IP } from '../../api/apis';

const data = [
	{ icon: require('../../assets/imgs/home/house.png'), text: `新房` },
	{ icon: require('../../assets/imgs/home/newhouse.png'), text: `租房` },
	{ icon: require('../../assets/imgs/home/二手房.png'), text: `二手房` },
	{ icon: require('../../assets/imgs/home/写字楼.png'), text: `写字楼` },
	{ icon: require('../../assets/imgs/home/我要卖房.png'), text: `卖房` },
	{ icon: require('../../assets/imgs/home/房价计算器.png'), text: `房价` },
	{ icon: require('../../assets/imgs/home/海外房产.png'), text: `海外房产` },
	{ icon: require('../../assets/imgs/home/租房.png'), text: `问答` },
];
const data1 = [
	{ icon: require('../../assets/imgs/home/贷款.png'), text: `贷款` },
	{ icon: require('../../assets/imgs/home/房贷计算.png'), text: `房贷` },
	{ icon: require('../../assets/imgs/home/知识馆.png'), text: `知识` },
	{ icon: require('../../assets/imgs/home/扫一扫.png'), text: `扫一扫` },
];
export default class Home extends Component {
	state = {
		value: '美食',
		imgHeight: 150,
		likeList: [],
		bannerImgs: ['/houseimg.jpg', '/houseimg2.jpg', '/houseimg3.jpg'],
		mycity: '定位中',
	};
	render() {
		let { mycity } = this.state;
		return (
			<div className="homepage">
				{/* 顶部搜索部分 */}
				<div className="topSerach">
					<WingBlank size="sm">
						<div className="topinfo">
							{/* 地址下拉 */}
							<div className="left-top" onClick={this.localtionCtiy.bind(this)}>
								<div className="city">{mycity}▼</div>
							</div>
							{/* 输入搜索框 */}
							<div className="center-top" onClick={this.serachBtn.bind(this)}>
								<img className="img" src={require('../../assets/imgs/icon-serach.png')} />
								速查app搜索房源
							</div>
							{/* 地图 */}
							<div className="right-top" onClick={this.mapBtn.bind(this)}>
								<img className="img" src={require('../../assets/imgs/icon-localtion.png')} />
							</div>
						</div>
					</WingBlank>
				</div>
				{/* 轮播部分 */}
				<div className="topBanner">
					<Carousel autoplay infinite className="topBanner">
						{this.state.bannerImgs.map((val, i) => {
							return (
								<img
									src={require('../../assets/imgs/home' + val)}
									alt=""
									key={i}
									style={{ width: '100%', verticalAlign: 'top' }}
									onLoad={() => {
										window.dispatchEvent(new Event('resize'));
										this.setState({ imgHeight: 'auto' });
									}}
								/>
							);
						})}
					</Carousel>
				</div>
				{/* //菜单小图标列表 */}
				<div>
					<Grid data={data} hasLine={false} />
				</div>

				{/* 房产全百科 */}
				<div className="center-eyclopedia">
					<div className="top-title">
						<WingBlank>
							<p>房产全百科</p>
						</WingBlank>
						<h4>专业买房攻略</h4>
					</div>
					{/* 房产全百科 icon列表 */}
					<div>
						<Grid data={data1} hasLine={false} />
					</div>
				</div>

				{/* 猜你喜欢 */}
				<div className="guesslike">
					<p className="like">猜你喜欢</p>
					{this.state.likeList.map(obj => {
						return (
							<div className="guesslikeList" key={obj.id}>
								<div className="guess">
									<img src={IP + obj.imgs} />
									<div className="right-houseInfo">
										<div className="title">
											<p className="tit">{obj.name}</p>
											<p className="num">{obj.price}/平</p>
										</div>
										<div className="bottoninfo">
											<p style={{ marginRight: '10px' }}>{obj.range}</p>
											<p>{obj.area}</p>
										</div>
										<div className="bottoninfo">
											<p style={{ marginRight: '10px' }}>{obj.type}</p>
											<p> {obj.point}平</p>
										</div>
									</div>
								</div>
							</div>
						);
					})}

					{/* <div className="guesslikeList">
						<div className="guess">
							<img src="../../assets/imgs/home/7.jpg" />
							<div className="right-houseInfo">
								<div className="title">
									<p className="tit">绿地静天成</p>
									<p className="num">17000/平</p>
								</div>
								<div className="bottoninfo">
									<p>成华区</p>
									<p>乱葬岗</p>
								</div>
								<div className="bottoninfo">
									<p>4是2厅</p>
									<p> 208平</p>
								</div>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		);
	}
	//页面加载获取 猜你喜欢列表数据
	componentDidMount() {
		gethouselist().then(res => {
			this.setState({
				likeList: res.data,
			});
		});
		//获取用户所在城市信息
		let _this = this;
		//实例化城市查询类
		var citysearch = new window.AMap.CitySearch();
		//自动获取用户IP，返回当前城市
		citysearch.getLocalCity(function(status, result) {
			if (status === 'complete' && result.info === 'OK') {
				if (result && result.city && result.bounds) {
					var cityinfo = result.city;
					var citybounds = result.bounds;
					_this.setState({
						mycity: cityinfo,
					});
				}
			}
		});
	}
	//顶部搜索框跳转
	serachBtn() {
		window.location.href = '#/search';
	}

	//顶部城市定位
	localtionCtiy() {
		window.location.href = '#/localtionCtiy';
	}

	//顶部地图
	mapBtn() {
		window.location.href = '#/map';
	}
}
