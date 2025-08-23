import React from "react";
import styles from "./History.module.css";
import { Skeleton } from "@mui/material";
const History = () => {
  return (
    <div className={styles.History}>
      <div className={styles.HistoryCardBlock}>
        <Skeleton
          variant="rectangular"
          sx={{ borderRadius: "20px" }}
          width={266}
          height={200}
        />

        <div className={styles.HistoryCard}>
          <div className={styles.cardPercentage}>80%</div>
          <h2>Frontend Developer</h2>
          <p>Resume Name: Resume.pdf</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            mollitia!
          </p>
          <p>Dated: 2025-11-18</p>
        </div>

        <div className={styles.HistoryCard}>
          <div className={styles.cardPercentage}>80%</div>
          <h2>Frontend Developer</h2>
          <p>Resume Name: Resume.pdf</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            mollitia!
          </p>
          <p>Dated: 2025-11-18</p>
        </div>

        <div className={styles.HistoryCard}>
          <div className={styles.cardPercentage}>80%</div>
          <h2>Frontend Developer</h2>
          <p>Resume Name: Resume.pdf</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            mollitia!
          </p>
          <p>Dated: 2025-11-18</p>
        </div>

        <div className={styles.HistoryCard}>
          <div className={styles.cardPercentage}>80%</div>
          <h2>Frontend Developer</h2>
          <p>Resume Name: Resume.pdf</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            mollitia!
          </p>
          <p>Dated: 2025-11-18</p>
        </div>
      </div>
    </div>
  );
};

export default History;
