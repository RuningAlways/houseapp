import React, { Component } from 'react';
import { gethouselist,IP } from '../../../api/apis';
export default class History extends Component {
	state = {
		likeList: [],
	};
	render() {
		return (
			<div className="guesslike">
				<p className="like">足迹</p>
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
		);
	}

    //页面加载获取 猜你喜欢列表数据
	componentDidMount() {
		gethouselist().then(res => {
			this.setState({
				likeList: res.data,
			});
		});
	}
}
