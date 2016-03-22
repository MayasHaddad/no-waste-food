import React from 'react'
import ReactDOM from 'react-dom'
import InjectTapEventPlugin from 'react-tap-event-plugin'
import SideNavigation from './components/SideNavigation'
import ApplicationBar from './components/ApplicationBar'
import FoodGridList from './components/FoodGridList'

import './styles/main.css'

InjectTapEventPlugin()

const Hello = () => {
  return (<div>
    <ApplicationBar />
    <SideNavigation />
    <FoodGridList />
  </div>)
}

ReactDOM.render((<Hello/>), document.getElementById('app'))
