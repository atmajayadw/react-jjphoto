import React, { Component } from 'react'
import Home from './pages/Home.js'
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
          {/* <Navbar /> */}
          <main>
            <Switch>
              <Route path="/" component={Home} exact />
              {/* <Route path="/photography" component={Photography} exact /> */}
            </Switch>
          </main>
        </BrowserRouter>
      </>
    )
  }
}
