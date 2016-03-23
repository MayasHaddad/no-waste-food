import React from 'react'
import AppBar from 'material-ui/lib/app-bar'
import * as actionTypes from '../actions'

export default class ApplicationBar extends React.Component {
  constructor (props) {
    super(props)
    this.props = props
  }

  render () {
    return <AppBar onLeftIconButtonTouchTap={() => this.props.store.dispatch({type: actionTypes.TOGGLE_SIDENAV})} title='NO FOOD WASTE' iconClassNameRight='muidocs-icon-navigation-expand-more' />
  }
}
