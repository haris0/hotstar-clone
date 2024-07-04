'use client'

import { useState } from "react";

import ContentCard from "../content-card";
import styles from './accordion-content.module.css';
import { Content } from "@/models/content";

interface AccordionContentProps {
  contents: Content[];
  initShow?: number;
}

const AccordionContent = ({ contents, initShow }: AccordionContentProps) => {
  const [showCount, setShowCount] = useState(initShow || contents.length);

  return (
    <div className={styles.accordion_container}>
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