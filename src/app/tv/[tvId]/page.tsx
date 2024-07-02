import React from 'react';

const TvDetail = ({ params }: { params: { tvId: string } }) => {
  const { tvId } = params;
  return (
    <div>
      TvDetail {tvId}
    </div>
  );
};

export default TvDetail;