import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Forget from './forget/Forget';
import './login.scss';
import {login} from '../../api/apis'
import { Button, Flex, InputItem, WingBlank, WhiteSpace,Toast } from 'antd-mobile';

export default class Login extends Component {
	state={
		user: '',
		pwd: '',
    olduser:"",//用于
    oldpwd:""
	}

	render() {
		let { user, pwd } = this.state;
		return (
			<div>
				<Flex justify="center">
					<div className="logo-box">
						<img style={{ width: 100 }} src={require('../../assets/imgs/logo.jpg')} />
					</div>
				</Flex>
				<WhiteSpace size="lg" />
				<WhiteSpace size="lg" />
				<WingBlank>
					<div>
						<InputItem
							placeholder="输入账号"
							clear//让输入框显示清除按钮
              value={user}//绑定受控
              onChange={v => {
                this.setState({	user : v})
							}}
						>
							<div
								style={{
									backgroundImage: `url(${require('../../assets/imgs/icon-user.png')})`,
									backgroundSize: 'cover',
									height: '22px',
									width: '22px',
								}}
							/>
						</InputItem>
						<WhiteSpace size="lg" />
						<InputItem
							placeholder="输入密码"
							clear//让输入框显示清除按钮
              value={pwd}//绑定受控
							type="password"
							onChange={v => {
                this.setState({	pwd : v})
							}}
						>
							<div
								style={{
									backgroundImage: `url(${require('../../assets/imgs/icon-password.png')})`,
									backgroundSize: 'cover',
									height: '22px',
									width: '22px',
								}}
							/>
						</InputItem>
					</div>
					<WhiteSpace size="lg" />
					<WhiteSpace size="lg" />
					<Button type="primary" onClick={this.loginBtn.bind(this)}>登陆</Button>

					<WhiteSpace size="lg" />
					<Flex justify="between">
						<Link to="/reg" className="loginfr">
							注册
						</Link>
						<Link to="/forget" className="loginfr">
							忘记密码？
						</Link>
					</Flex>
				</WingBlank>
			</div>
		);
	}

  //登录请求
  loginBtn(){
    let user=this.state.user
    let pwd=this.state.pwd
    let olduser=this.state.olduser
    let oldpwd=this.state.oldpwd

    //判断当前输入的值和状态原有的 状态olduser ，oldpwd 进行判断，如果相等说明没有输入新的值则不提交登录请求
    if(olduser===user && pwd===oldpwd)  return

    this.setState({
      olduser:this.state.user,//把当前输入的值赋值给 状态olduser ，oldpwd 用于做判断
      oldpwd:this.state.pwd,
    })


    login(user,pwd).then(res=>{
      if(res.data==='ok'){
        window.location.href='#/' //后台响应ok成功则跳转首页
      }else{
        //Toast 插件运用 错误提示
        Toast.info('用户名或密码错误', 3);
      }
    })
  }
}
