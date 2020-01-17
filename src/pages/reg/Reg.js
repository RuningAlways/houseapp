import React, { Component } from 'react'
import { Button,Flex,InputItem,WingBlank,WhiteSpace,Checkbox,Toast } from 'antd-mobile';
import {Link} from 'react-router-dom'
import './reg.scss'
import {reg,getValitecode} from '../../api/apis'

export default class Reg extends Component {
    state={
        user:"",
        pwd:"",
        code:""
    }
    render() {
        let {user,pwd,code}=this.state
        return (
            <div>
            <WingBlank size='md'>
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <InputItem
                    value={user}
                    onChange={v=>{
                        this.setState({
                           user:v 
                        })
                    }}
                    placeholder="输入电话" >手机号码</InputItem>
                <WhiteSpace size="lg" />
                <InputItem
                    type="password"
                    value={pwd}
                    onChange={v=>{
                        this.setState({
                           pwd:v 
                        })
                    }}
                    placeholder="输入密码">密码</InputItem>
                <WhiteSpace size="lg" />
                <InputItem placeholder="输入验证码" 
                 className="codebox"
                  value={code}
                    onChange={v=>{
                        this.setState({
                           code:v 
                        })
                    }}
                 >验证码
                   <lable>
                    <div className='code' ref="codeinput" onClick={this.codeBtn.bind(this)}>获取验证码</div>
                   </lable>
                </InputItem>
                <WhiteSpace size="lg" />
                <Flex.Item>
                    <Checkbox className="my-radio" >我已同意
                        <Link to="/protocol" className="loginfr">《租房、卖房协议》</Link>
                    </Checkbox>
                </Flex.Item>
                <WhiteSpace size="lg" />
                <Button type="primary" onClick={this.regBtn.bind(this)}>注册</Button>
                <WhiteSpace size="lg" />
                <Flex justify="between">
                        <Link to="/login" className="loginfr">已有账号</Link>
                </Flex>
            </WingBlank>
                </div>
        )
    }

    //注册功能
    regBtn(){
        let user =this.state.user
        let pwd =this.state.pwd
        reg(user,pwd).then(res=>{
            if(res.data==='ok'){
                window.location.href='#/login'
            }else{
                Toast.info('用户名或密码错误', 2);
            }
        })
        
    }

    //获取验证码
    codeBtn(){
      //通过ref唯一标识获取当前标签
      let codeinput=this.refs.codeinput
      getValitecode().then(res=>{
        this.setState({
          code:res.data
        })
        // codeinput.innerHTML=this.state.code
      })
    }
}
