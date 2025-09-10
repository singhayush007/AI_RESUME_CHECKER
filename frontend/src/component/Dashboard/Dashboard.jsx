import React from "react";
import styles from "./Dashboard.module.css";
import ScoreboardIcon from "@mui/icons-material/Scoreboard";
import Skeleton from '@mui/material/Skeleton';
import WithAuthHOC from '../../utils/HOC/withAuthHOC';
const Dashboard = () => {
  return (
    <div className={styles.Dashboard}>
      <div className={styles.DashboardLeft}>
        <div className={styles.DashboardHeader}>
          <div className={styles.DashboardHeaderTitle}>
            Smart Resume Scanning
          </div>
          <div className={styles.DashboardHeaderLargeTitle}>
            Resume Match Score
          </div>
        </div>

        <div className={styles.alertInfo}>
          <div> 🔔 Important Instructions:</div>
          <div className={styles.dashboardInstruction}>
            <div>
              {" "}
              📄 Please Paste The Complete JD in the "Job Description" field
              before submitting.
            </div>
            <div> 🔗 Only PDF Format (.pdf) resume are accepted</div>
          </div>
        </div>

        <div className={styles.DashboardUploadResume}>
          <div className={styles.DashboardResumeBlock}>Upload Your Resume</div>
          <div className={styles.DashboardInputField}>
            <label htmlFor="inputField" className={styles.analyzeAIBtn}>
              Upload Resume
            </label>
            <input type="file" accept=".pdf" id="inputField" />
          </div>
        </div>

        <div className={styles.jobDesc}>
          <textarea
            className={styles.textArea}
            placeholder="Paste Your Job Description"
            rows={10}
            cols={50}
          />

          <div className={styles.AnalyzeBtn}>Analyze</div>
        </div>
      </div>

      <div className={styles.DashboardRight}>
        <div className={styles.DashboardRightTopCard}>
          <div>Analyze With AI</div>

          <img
            className={styles.profileImg}
            src={
              "https://cdn.prod.website-files.com/6600e1eab90de089c2d9c9cd/662c092880a6d18c31995e13_66236537d4f46682e079b6ce_Casual%2520Portrait.webp"
            }
          />
          <h2>John Doe</h2>
        </div>
        {/* <div className={styles.DashboardRightTopCard}>
          <div>Result</div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 20,
            }}
          >
            <h1>75%</h1>
            <ScoreboardIcon sx={{ fontSize: 22 }} />
          </div>

          <div className={styles.feedback}>
            <h3>Feedback</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Expedita, ea.
            </p>
          </div> */}
 <Skeleton variant = "rectangular" sx = {{borderRadius: "20px"}} width ={200} height={200} />
        </div>
      </div>
    // </div>
  );
};

export default WithAuthHOC(Dashboard);
