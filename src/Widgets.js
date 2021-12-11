import React from "react";
import "./Widgets.css";
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Your Friends</h2>
        <EmojiPeopleIcon />
      </div>

      {newsArticle("BRUH IM OP", "Piyush Dhoble")}
      {newsArticle("BRUH IM MATHS GOD", "Arnav Bhosale")}
      {newsArticle("IDK LOL", "Friend-1")}
      {newsArticle("IDK LOL", "Friend-2")}
      {newsArticle("IDK LOL", "Friend-3")}
    </div>
  );
};

export default Widgets;
