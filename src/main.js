import React from 'react'
import ReactDOM from 'react-dom'
import InjectTapEventPlugin from 'react-tap-event-plugin'
import SideNavigation from './components/SideNavigation'
import ApplicationBar from './components/ApplicationBar'
import FoodGridList from './components/FoodGridList'
import { createStore } from 'redux'
import reducers from './reducers'
import './styles/main.css'

InjectTapEventPlugin()

const store = createStore(reducers)

const Root = () => {
  return (<div>
    <ApplicationBar store={store} />
    <SideNavigation store={store} />
    <FoodGridList store={store} />
  </div>)
}

ReactDOM.render((<Root store={store} />), document.getElementById('app'))
