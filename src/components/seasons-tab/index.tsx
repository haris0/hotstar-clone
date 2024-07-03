'use client'

import { useState } from "react";
import Image from 'next/image';
import { Season } from "@/repositories/getTvDetail/type";
import styles from "./seasons-tab.module.css";
import { useTvSeson } from "@/repositories/getTvSeason/useTvSeason";
import { getFullEpsImageUrl } from "@/repositories/constants";
import { convertDate } from "@/helpers/convertDate";
import { convertMinsToHrsMins } from "@/helpers/convertMinsToHrsMins";

interface SeasonsTabsProps {
  tvId: string;
  seasons: Season[];
}

const placeholdImage = (title: string) => `https://placehold.co/227x127?text=${title}`;

const SeasonsTabs = ({ tvId, seasons }: SeasonsTabsProps) => {
  const [selectedSeason, setSelectedSeason] = useState(seasons[0].season_number);
  const { data } = useTvSeson({ tvId,  seasonNumber: String(selectedSeason)});

  return (
    <div>
      <div className={styles.tab_container}>
        {seasons.map((season) => (
          <button 
            key={season.id} 
            className={`${styles.tab_button} ${selectedSeason === season.season_number ? styles.tab_active : ''}`}
            onClick={() =>   setSelectedSeason(season.season_number)}
          >
            {season.name}
          </button>
        ))}
      </div>
      <div className={styles.episodes_container}>
        {data?.episodes.map((eps) => (
          <div key={eps.id} className={styles.episode_container}>
            <Image
              src={getFullEpsImageUrl(eps.still_path) || placeholdImage(eps.name)}
              placeholder="blur"
              blurDataURL={getFullEpsImageUrl(eps.still_path) || placeholdImage(eps.name)}
              alt={eps.name}
              width={227}
              height={127}
              className={styles.image}
            />
            <div>
              <h4>{eps.name}</h4>
              <span>{`S${eps.season_number} E${eps.episode_number}`} • {convertDate(eps.air_date)} • {convertMinsToHrsMins(eps.runtime)}</span>
              <p className={styles.overview}>{eps.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeasonsTabs;