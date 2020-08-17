import React from 'react'
import '../css/sidebarOptions.css'

function SidebarOptions({active,text,Icon}) {
  return (
    <div className={`sidebarOption ${active &&'sidebarOption--active'}`}>
      <Icon></Icon>
      <h2>{text}</h2>
    </div>
  )
}

export default SidebarOptions
