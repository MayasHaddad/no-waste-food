import React from 'react'
import LeftNav from 'material-ui/lib/left-nav'
import SideNavMenuList from './SideNavMenuList'

export default class SideNavigation extends React.Component {

  constructor (props) {
    super(props)
    this.state = {open: false}
    this.handleToggle = this.handleToggle.bind(this)
  }

  componentDidMount () {
    this.props.store.subscribe(this.handleToggle)
  }

  handleToggle () {
    this.setState({open: !this.state.open})
  }

  render () {
    return (
      <div>
        <LeftNav width={200} openRight open={this.state.open} >
          <SideNavMenuList />
        </LeftNav>
      </div>
    )
  }
}
