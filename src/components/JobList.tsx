import { useCallback, useEffect, useState } from "react";
import JobCard from "./JobCard";
import styles from "../styling/JobList.module.css";
import type { Job, Filter } from "../types";
import JobFilter from "./JobFilter";
import JobSearch from "./JobSearch";
import SortDropdown from "./SortDropdown";

function JobList({ data }: { data: Job[] }) {
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState<Filter>({ type: "", location: "" });
  const [sortBy, setSortBy] = useState("");

  const updateFilters = useCallback((key: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  useEffect(() => {
    const filtered = data
      .filter((job) => !filters.location || job.location === filters.location)
      .filter((job) => !filters.type || job.type === filters.type);
    setFilteredJobs(filtered);
  }, [filters, data]);

  return (
    <div className={styles.container}>
      <h1>Job Board</h1>
      <div className={styles.actions}>
        <JobFilter filters={filters} updateFilters={updateFilters} />
        <JobSearch />
        <SortDropdown />
      </div>
      <div className={styles.grid}>
        {filteredJobs.map((job) => {
          return <JobCard key={job.id} job={job} />;
        })}
      </div>
    </div>
  );
}

export default JobList;
