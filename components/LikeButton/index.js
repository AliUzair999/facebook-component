import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faLaugh, faSadCry, faAngry, faHeart } from '@fortawesome/free-solid-svg-icons';

const LikeButton = () => {
  const [likeType, setLikeType] = useState('like');
  const [showOptions, setShowOptions] = useState(false);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };

  const handleMouseLeave = () => {
    setShowOptions(false);
  };

  const handleOptionClick = (type) => {
    setLikeType(type);
    setShowOptions(false);
  };

  let icon = faThumbsUp;

  switch (likeType) {
    case 'like':
      icon = faThumbsUp;
      break;
    case 'love':
      icon = faHeart;
      break;
    case 'haha':
      icon = faLaugh;
      break;
    case 'wow':
      icon = faSadCry;
      break;
    case 'angry':
      icon = faAngry;
      break;
    default:
      icon = faThumbsUp;
  }

  return (
    <div className="like-button" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {showOptions && (
        <div className="like-options">
          <div onClick={() => handleOptionClick('like')}>
            <FontAwesomeIcon icon={faThumbsUp} />
            <span>Like</span>
          </div>
          <div onClick={() => handleOptionClick('love')}>
            <FontAwesomeIcon icon={faHeart} />
            <span>Love</span>
          </div>
          <div onClick={() => handleOptionClick('haha')}>
            <FontAwesomeIcon icon={faLaugh} />
            <span>Haha</span>
          </div>
          <div onClick={() => handleOptionClick('wow')}>
            <FontAwesomeIcon icon={faSadCry} />
            <span>Wow</span>
          </div>
          <div onClick={() => handleOptionClick('angry')}>
            <FontAwesomeIcon icon={faAngry} />
            <span>Angry</span>
          </div>
        </div>
      )}
      <FontAwesomeIcon icon={icon} />
      <span>{likeType === 'like' ? 'Like' : likeType.charAt(0).toUpperCase() + likeType.slice(1)}</span>
    </div>
  );
};

export default LikeButton;
