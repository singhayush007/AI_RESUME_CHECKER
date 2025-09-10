import React from "react";
import styles from "./Admin.module.css";
import { Skeleton } from "@mui/material";
import WithAuthHOC from "../../utils/HOC/withAuthHOC";
const Admin = () => {
  return (
    <div className={styles.Admin}>
      <div className={styles.AdminBlock}>
        <Skeleton
          variant="rectangular"
          sx={{ borderRadius: "20px" }}
          width={266}
          height={200}
        />

        <div className={styles.AdminCard}>
          <h2>John Doe</h2>
          <p style={{ color: "blue" }}>johndoe@gmail.com</p>
          <h3>Score: 50%</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa,
            pariatur.
          </p>
        </div>

        <div className={styles.AdminCard}>
          <h2>John Doe</h2>
          <p style={{ color: "blue" }}>johndoe@gmail.com</p>
          <h3>Score: 50%</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa,
            pariatur.
          </p>
        </div>

        <div className={styles.AdminCard}>
          <h2>John Doe</h2>
          <p style={{ color: "blue" }}>johndoe@gmail.com</p>
          <h3>Score: 50%</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa,
            pariatur.
          </p>
        </div>

        <div className={styles.AdminCard}>
          <h2>John Doe</h2>
          <p style={{ color: "blue" }}>johndoe@gmail.com</p>
          <h3>Score: 50%</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa,
            pariatur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WithAuthHOC(Admin);
