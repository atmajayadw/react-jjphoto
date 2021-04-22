import React, { Component } from 'react'
import Home from './pages/Home.js'
import Portfolio from './pages/Portfolio.js'
import Content from './pages/Content.js'
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom"

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <main>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/portfolio" component={Portfolio} exact />
              <Route path="/portfolio/content" component={Content} exact />
            </Switch>
          </main>
        </BrowserRouter>
      </>
    )
  }
}
