import React from 'react'
import '../css/widgets.css'
import TextField from '@material-ui/core/TextField';

import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

import SearchIcon from '@material-ui/icons/Search';
function Widgets() {
  return (
    <div className='widgets'>
      <div className="widgets__input">
        <SearchIcon className='widgets__searchIcon'></SearchIcon>
        <TextField id="standard-basic" label="Search Twitter" />
        {/* <input type="text" placeholder='Search Twitter' /> */}
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happenig?</h2>
        <TwitterTweetEmbed
          tweetId={'933354946111705097'}
        />
        <TwitterTweetEmbed
          tweetId={'933354946111705097'}
        />
        <TwitterTweetEmbed
          tweetId={'933354946111705097'}
        />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="saurabhnemade"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={'https://facebook.com/saurabhnemade'}
          options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
        />
      </div>
    </div>
  )
}

export default Widgets
