import React from 'react'
import '../css/sidebar.css'
import SidebarOptions from './SidebarOptions';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import { Button } from '@material-ui/core';

function Sidebar() {
  return (
    <div className='sidebar'>
      <TwitterIcon className='sider__twitterIcon'></TwitterIcon>
      <SidebarOptions Icon={HomeIcon} text = 'Home'></SidebarOptions>
      <SidebarOptions Icon={SearchIcon} text = 'Explore'></SidebarOptions>
      <SidebarOptions Icon={NotificationsNoneIcon} text = 'Notifications'></SidebarOptions>
      <SidebarOptions Icon={MailOutlineIcon} text = 'Messages'></SidebarOptions>
      <SidebarOptions Icon={BookmarkBorderIcon} text = 'Bookmarks'></SidebarOptions>
      <SidebarOptions Icon={ListAltIcon} text = 'List'></SidebarOptions>
      <SidebarOptions Icon={PermIdentityIcon} text = 'Profile'></SidebarOptions>
      <SidebarOptions Icon={MoreHorizIcon} text = 'More'></SidebarOptions>
      <Button className='sidebar__tweet' variant='outlined'  fullWidth>Twitter</Button>

    </div>
  )
}

export default Sidebar
