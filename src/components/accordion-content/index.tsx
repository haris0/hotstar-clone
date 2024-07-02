'use client'

import { useState } from "react";

import ContentCard, { ContentCardProps } from "../content-card";
import styles from './accordion-content.module.css';

interface AccordionContentProps {
  contents: ContentCardProps[];
  initShow?: number;
}

const AccordionContent = ({ contents, initShow = 15 }: AccordionContentProps) => {
  const [showCount, setShowCount] = useState(initShow);

  return (
    <div className={styles.toprated_container}>
      {contents?.slice(0, showCount).map((content) => (
        <ContentCard
          key={content.id} 
          {...content}
        />
      ))}
      {contents.length > showCount && showCount === initShow && (
        <button 
          onClick={() => setShowCount(contents.length)}
          className={styles.button_show}
        >
          Show All
        </button>
      )}
    </div>
  );
};

export default AccordionContent;