//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = props => {
  console.log(props);
  return (
    <div className="posts-container-wrapper">
      {props.postData.map(data =>(
        <div className='box' key={data.timestamp}>
          <Post
            // data={data}
            className='box'
            username={data.username}
            thumbNail={data.thumbnailUrl}
            image={data.imageUrl}
            likes={data.likes}
            timestamp={data.timestamp}
            comments={data.comments}
          />
        </div>
      ))}
    </div>
  );
};

export default PostsPage;

