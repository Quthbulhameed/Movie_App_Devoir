import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const MovieCard = ({ movie, onDelete, onLikeToggle }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(movie.likes);
  const [dislikeCount, setDislikeCount] = useState(movie.dislikes);

  const handleLikeToggle = () => {
    setLiked(!liked);
    onLikeToggle(movie.id);

    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }

    setDislikeCount(dislikeCount - 1); // mise à jour du compteur de dislikes
  };

  const handleLike = () => {
    setLikeCount(likeCount + 1);
    onLikeToggle(movie.id);
  };

  const handleDislike = () => {
    setDislikeCount(dislikeCount + 1);
    onLikeToggle(movie.id, false);
  };

  return (
    <div className="movie-card">
      <div className="movie-card-header">
        <h2 className="movie-card-title">{movie.title}</h2>
        <button className="delete-button" onClick={() => onDelete(movie.id)}>Delete</button>
      </div>
      <div className="movie-card-body">
        <div className="movie-card-category">{movie.category}</div>
        <div className="movie-card-likes">
          <button className={`like-button ${liked ? 'liked' : ''}`} onClick={handleLikeToggle}>
            {liked ? 'Dislike' : 'Like'}
          </button>
          <ProgressBar likes={likeCount} dislikes={dislikeCount} />
          <div className="likes-count">{`${likeCount} likes`}</div>
          <div className="dislikes-count">{`${dislikeCount} dislikes`}</div>
          <div className="like-dislike-buttons">
            <button className="like" onClick={handleLike} style={{ backgroundColor: '#90EE90' }}>+1 Like</button>
            <button className="dislike" onClick={handleDislike} style={{ backgroundColor: ' #f18973' }}>+1 Dislike</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
