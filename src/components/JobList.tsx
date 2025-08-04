import { useState } from "react";
import JobCard from "./JobCard";
import styles from "../styling/JobList.module.css";
import type { Job, Filter } from "../types";

function JobList({ data }: { data: Job[] }) {
  const [jobList, setJobList] = useState<Job[]>(data);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState<Filter>({ type: [], location: [] });
  const [sortBy, setSortBy] = useState("");

  return (
    <div className={styles.container}>
      <h1>Job Board</h1>
      <div className="actions"></div>
      <div className={styles.grid}>
        {jobList.map((job) => {
          return <JobCard key={job.id} job={job} />;
        })}
      </div>
    </div>
  );
}

export default JobList;
