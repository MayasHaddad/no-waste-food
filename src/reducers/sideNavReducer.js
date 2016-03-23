import * as actionTypes from '../actions'

export default function sideNavReducer (state = { isSideNavVisible: false }, actionType) {
  if (actionType.type === actionTypes.TOGGLE_SIDENAV) {
    return { ...state, isSideNavVisible: !state.isSideNavVisible }
  }
  return state
}
