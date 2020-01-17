import React, { Component } from 'react'
import { HashRouter,Switch, Route } from 'react-router-dom'
import Login from './pages/login/Login'
import Nav from './pages/nav/Nav'
import Reg from './pages/reg/Reg'
import Forget from './pages/login/forget/Forget'
import Protocol from './pages/reg/Protocol'
import Search from './pages/nav/search/Search'
import LocaltionCtiy from './pages/nav/city/LocaltionCtiy'
import Map from './pages/nav/map/Map'
export default class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            {/* exact 默认加载页面 */}
            <Route path="/" exact component={Nav}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/reg" component={Reg}></Route>
            <Route path="/forget" component={Forget}></Route>
            <Route path="/protocol" component={Protocol}></Route>
            <Route path="/search" component={Search}></Route>
            <Route path="/localtionCtiy" component={LocaltionCtiy}></Route>
            <Route path="/map" component={Map}></Route>
          </Switch>
        </HashRouter>
      </div>
    )
  }
}
