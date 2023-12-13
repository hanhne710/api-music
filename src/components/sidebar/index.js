import React from 'react'
import './sidebar.css'
import SidebarButton from './sidebarButton'
import { MdFavorite } from 'react-icons/md'
import { FaGripfire, FaPlay } from 'react-icons/fa'
import { FaSignOutAlt } from 'react-icons/fa'
import { IoLibrary } from 'react-icons/io5'
import { MdSpaceDashboard } from 'react-icons/md'

export default function Sidebar() {
  return (
    <div className='sidebar-container'>
      <img
        src='https://kenh14cdn.com/203336854389633024/2022/4/14/photo-1-1649929053290514407805.png'
        className='profile-img'
        alt='rosé' />
      <div>
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton
          title="Favorites"
          to="/favorites"
          icon={<MdFavorite />}
        />
        <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
      </div>
      <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />
    </div>
  )
}
