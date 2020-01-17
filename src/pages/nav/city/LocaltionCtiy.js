import React, { Component } from 'react';
import citylist from '../../../json/city.json';
import BScroll from 'better-scroll';
import './localtioncity.scss';

export default class LocaltionCtiy extends Component {
	render() {
		return (
			<div className="cityBox">
				<h2>城市列表</h2>
        {/* 左边滚动城市列表 */}
				<div className="left-cityBox" id="scrollBox">
					<ul className="content">
						{citylist.map(obj => {
							return (
								<div className="citys" key={obj.initial}>
									<div className="city-title" id={obj.initial}>{obj.initial}</div>
									{obj.list.map(cityname => {
										return <p className="city-name">{cityname.name}</p>;
									})}
								</div>
							);
						})}
					</ul>
				</div>
        {/* 右边首拼列表 */}
        <div className='rightTab'>
          {
            citylist.map(val=>{
            return <p onClick={this.titleBtn.bind(this,val.initial)}>{val.initial}</p>
            })
          }
        </div>
        
			</div>
		);
	}

	// 定义滑动
	componentDidMount() {
    //挂载this 是为了在下面的titleBtn  点击事件拿到dom
		this.cityBox = new BScroll('#scrollBox');
	}

  //右边首拼点绑定击事件
  //  scrollToElement(跳转指定位置,执行事件)  跳转到指定位置 
  titleBtn(title){//title 事件绑定传入当前的点击对象
    this.cityBox.scrollToElement('#'+title,800)
  }
}
