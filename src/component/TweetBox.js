import React from 'react';
import '../css/tweetbox.css'
import { useState, useEffect } from 'react';

import { Avatar, Button } from '@material-ui/core';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import GifIcon from '@material-ui/icons/Gif';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import database from './firebase';


function TweetBox() {
  const [tweetMess, settweetMess] = useState("");
  const sendTweet = e => {
    e.preventDefault();
    database.collection('post').add({
      displayName:"Avicii Fan",
      userName:'@aviciifan',
      verified:true,
      text:tweetMess,
      avatar:'https://yt3.ggpht.com/-CjLZ37NzBYo/AAAAAAAAAAI/AAAAAAAAAAA/gxDtL2bkVHQ/s900-c-k-no-mo-rj-c0xffffff/photo.jpg',
      image:'https://images-na.ssl-images-amazon.com/images/I/71QN9mcurlL._SX450_.jpg'
    });
    settweetMess('');

  }
  return (
    <div className='tweetBox'>
      <div className="tweetBox__input">
        <Avatar src='https://yt3.ggpht.com/-CjLZ37NzBYo/AAAAAAAAAAI/AAAAAAAAAAA/gxDtL2bkVHQ/s900-c-k-no-mo-rj-c0xffffff/photo.jpg' alt='Avicii'></Avatar>
        <input
          placeholder="What's happening?"
          value={tweetMess}
          onChange={e => {
            settweetMess(e.target.value)
          }}
        ></input>
      </div>
      <div className="tweetBox__footer">
        <div className="tweetBox__icon">
          <InsertEmoticonIcon className='fontsize'></InsertEmoticonIcon>
          <GifIcon className='fontsize'></GifIcon>
          <EqualizerIcon className='fontsize'></EqualizerIcon>
          <CropOriginalIcon className='fontsize'></CropOriginalIcon>
        </div>
        {/* <Button>Tweet</Button> */}
        <Button className='tweetBox__button'
          onClick={sendTweet}
        >Tweet</Button>
      </div>
    </div>
  )
}

export default TweetBox
