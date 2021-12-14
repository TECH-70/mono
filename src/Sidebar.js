import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Sidebar.css";

const Sidebar = () => {
  const { user } = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user.displayName[0].toUpperCase()}
        </Avatar>
        <h2>{user.displayName}</h2>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Friends</p>
          <p className="sidebar__statNumber">2,300</p>
        </div>
        <div className="sidebar__stat">
          <p>Likes on posts</p>
          <p className="sidebar__statNumber">2,570</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        <h1>Screen time function</h1>
      </div>
    </div>
  );
};

export default Sidebar;
