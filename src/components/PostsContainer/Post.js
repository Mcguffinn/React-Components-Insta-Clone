// You will add code in this file

import React, {useState} from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

const Post = props => {
  // set up state for the likes
  const [likes, setLikes] = useState(props.likes);

  const addLikes = () =>{
    setLikes(likes => likes +=1);
  }

  return (
    <div className="post-border">
      <PostHeader
        username={props.username}
        thumbNail={props.thumbNail}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.image}
        />
      </div>
      <LikeSection 
        addLikes={addLikes}
        likes = {likes}
        />
      <CommentSection
        postId={props.thumbNail}
        comments={props.comments}
      />
    </div>
  );
};

export default Post;
