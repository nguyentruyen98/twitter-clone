import React, { useState, useEffect } from 'react'
import '../css/feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import database from './firebase';

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    database
      .collection('post')
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map(doc => doc.data()))
      );
  }, []);

  return (
    <div className='feed'>


      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox></TweetBox>
      {posts.map(post =>

        <Post
          displayName={post.displayName}
          userName={post.userName}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        ></Post>

      )}


    </div>
  )
}

export default Feed
