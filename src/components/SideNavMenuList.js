import React from 'react'
import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'
import ShopIcon from 'material-ui/lib/svg-icons/action/shopping-cart'
import ShopOwnerIcon from 'material-ui/lib/svg-icons/action/face'
import StoreIcon from 'material-ui/lib/svg-icons/action/store'
import SettingsIcon from 'material-ui/lib/svg-icons/action/settings'
import NewsFeedIcon from 'material-ui/lib/svg-icons/av/new-releases'
import InviteFriendsIcon from 'material-ui/lib/svg-icons/social/group-add'
import PromotionIcon from 'material-ui/lib/svg-icons/action/loyalty'
import Divider from 'material-ui/lib/divider'

const SideNavMenuList = () => (
  <div>
    <List>
      <ListItem primaryText='Discounts' leftIcon={<PromotionIcon />} />
      <ListItem primaryText='Shops' leftIcon={<StoreIcon />} />
      <ListItem primaryText='Cart' leftIcon={<ShopIcon />} />
      <ListItem primaryText='Invite Friends' leftIcon={<InviteFriendsIcon />} />
      <ListItem primaryText='News Feed' leftIcon={<NewsFeedIcon />} />
      <ListItem primaryText='Settings' leftIcon={<SettingsIcon />} />
    </List>
    <Divider />
    <List>
      <ListItem primaryText='Shop Owner?' rightIcon={<ShopOwnerIcon />} />
    </List>
  </div>
)

export default SideNavMenuList
