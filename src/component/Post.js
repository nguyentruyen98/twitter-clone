import React ,{forwardRef}from 'react'
import { Avatar, Button } from '@material-ui/core';
import '../css/post.css'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post({
  displayName,
  userName,
  verified,
  text,
  image,
  avatar,


}) {
  return (
    <div className='post'>
      <div className="post__avatar">
        <Avatar src={avatar}></Avatar>
      </div>
      <div className="post__body">
        <div className="post__header">
          <div>
            <h3 className="post__headerText">
              {displayName} <span className='post_headerSpecial'>
                {verified && <VerifiedUserIcon className='post__badge'></VerifiedUserIcon>}
                <span>{userName}</span>
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>

        <img src={image} alt="Avicii" />
        <div className="post__footer">
          <Button>
            <ChatBubbleOutlineIcon fontSize='small'></ChatBubbleOutlineIcon>
          </Button>
          <Button>
            <RepeatIcon fontSize='small'></RepeatIcon>
          </Button>
          <Button>
            <FavoriteBorderIcon fontSize='small'></FavoriteBorderIcon>
          </Button>
          <Button>
            <PublishIcon fontSize='small'></PublishIcon>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Post
