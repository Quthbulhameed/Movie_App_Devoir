import React from 'react';

const ProgressBar = ({ likes, dislikes }) => {
  const total = likes + dislikes;
  const likePercentage = total === 0 ? 0 : Math.round((likes / total) * 100);
  const dislikePercentage = total === 0 ? 0 : Math.round((dislikes / total) * 100);

  return (
    <div className="progress-bar">
      <div className="progress-bar-likes" style={{ width: `${likePercentage}%` }}>
        {likePercentage}%
      </div>
      <div className="progress-bar-dislikes" style={{ width: `${dislikePercentage}%` }}>
        {dislikePercentage}%
      </div>
    </div>
  );
};

export default ProgressBar;
