import React from "react";
import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import HeaderOption from "./HeaderOption";
import { logout } from "./features/userSlice";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    await auth.signOut();
    dispatch(logout());
  };

  return (
    <div className="header">
      <div className="header__left">
        <h1>Monotone</h1>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={LocalCafeIcon} title="Buy us a coffee" />
        <HeaderOption title="Logout"Icon={ExitToAppIcon} onClick={logoutHandler} />
      </div>
    </div>
  );
};

export default Header;
