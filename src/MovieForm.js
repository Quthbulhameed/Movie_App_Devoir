import React, { useState } from 'react';

const MovieForm = ({onSubmit}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({title, category});
    setTitle('');
    setCategory('');
  };

  return (
    <div className="movie-form">
      <form onSubmit={handleSubmit}>
        
       
      </form>
    </div>
  );
};

export default MovieForm;
