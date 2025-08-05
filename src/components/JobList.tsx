import { useCallback, useDeferredValue, useMemo, useState } from "react";
import JobCard from "./JobCard";
import styles from "../styling/JobList.module.css";
import type { Job, Filter } from "../types";
import JobFilter from "./JobFilter";
import JobSearch from "./JobSearch";
import SortDropdown from "./SortDropdown";

function JobList({ data }: { data: Job[] }) {
  const [filters, setFilters] = useState<Filter>({ type: "", location: "", searchTerm: "", sortBy: "asc" });
  const deferredSearchTerm = useDeferredValue(filters.searchTerm);

  const updateFilters = useCallback((key: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  const sortByDate = (data: Job[], sortOrder: "asc" | "dsc") => {
    return sortOrder === "asc"
      ? data.sort((a, b) => new Date(a.postedAt).getTime() - new Date(b.postedAt).getTime())
      : data.sort((a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime());
  };

  const filteredJobs = useMemo(() => {
    const filtered = data
      .filter((job) => !filters.location || job.location === filters.location)
      .filter((job) => !filters.type || job.type === filters.type)
      .filter((job) => !deferredSearchTerm || job.title.toLowerCase().includes(deferredSearchTerm.toLowerCase()));

    return sortByDate(filtered, filters.sortBy);
  }, [filters, data, deferredSearchTerm]);

  return (
    <div className={styles.container}>
      <h1>Job Board</h1>
      <div className={styles.actions}>
        <JobFilter filters={filters} updateFilters={updateFilters} />
        <JobSearch filters={filters} updateFilters={updateFilters} />
        <SortDropdown filters={filters} updateFilters={updateFilters} />
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
