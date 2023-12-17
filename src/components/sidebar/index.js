import React, { useState, useEffect } from "react";
import "./sidebar.css";
import SidebarButton from "./sidebarButton";
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import apiClient from "../../spotify";

export default function Sidebar() {
  const [image, setImage] = useState(
    "https://kenh14cdn.com/203336854389633024/2022/4/14/photo-1-1649929053290514407805.png"
  );
  useEffect(() => {
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0].url);
    });
  }, []);
  return (
    <div className='sidebar-container'>
      <img
        src={image}
        className='profile-img'
        alt='rosé' />
      <div>
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
      </div>
      <SidebarButton title="Sign Out" to="#" icon={<FaSignOutAlt />} />
    </div>
  )
}
