import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment, faShareSquare } from '@fortawesome/free-solid-svg-icons';
import LikeButton from '../LikeButton';

const PostFooter = () => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="post-footer">
      <button className='footerButton'>
        {/* <FontAwesomeIcon icon={faThumbsUp} />
        <span style={{marginLeft:10}}>{likes} Likes</span> */}
        <LikeButton />
      </button>
      <button className='footerButton'>
        <FontAwesomeIcon icon={faComment} />
        <span style={{marginLeft:10}}>Comment</span>
      </button>
      <button className='footerButton'>
        <FontAwesomeIcon icon={faShareSquare} />
        <span style={{marginLeft:10}}>Share</span>
      </button>
    </div>
  );
};

export default PostFooter;
