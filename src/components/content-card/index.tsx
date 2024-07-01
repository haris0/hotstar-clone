import React from 'react';

interface ContentCardProps {
  title: string;
  overview: string;
  imageUrl: string;
}

const ContentCard = ({title, overview, imageUrl}: ContentCardProps) => {
  return (
    <div>
      {title}
    </div>
  );
};

export default ContentCard;