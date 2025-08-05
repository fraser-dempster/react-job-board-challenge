import type { Job } from "../types";
import styles from "../styling/JobCard.module.css";
import { memo } from "react";

const JobCard = memo(function JobCard({ job }: { job: Job }) {
  return (
    <div className={styles.container}>
      <h2>{job.title}</h2>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <p>{job.type}</p>
      <p>{job.postedAt}</p>
    </div>
  );
});

export default JobCard;
