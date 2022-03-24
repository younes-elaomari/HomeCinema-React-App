import React from "react";

const Like = ({ liked, onLike }) => {
  return (
    <div>
      <i
        onClick={onLike}
        style={{ cursor: "pointer" }}
        className={liked ? "fa fa-heart" : "fa fa-heart-o"}
      ></i>
    </div>
  );
};

export default Like;
