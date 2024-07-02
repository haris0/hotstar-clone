import React from 'react';

const MovieDetail = ({ params }: { params: { movieId: string } }) => {
  const { movieId } = params;
  return (
    <div>
      MovieDetail {movieId}
    </div>
  );
};

export default MovieDetail;