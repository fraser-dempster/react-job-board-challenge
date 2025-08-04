import { memo } from "react";
import styles from "../styling/JobFilter.module.css";

const JobFilter = memo(function JobFilter({ filters, updateFilters }) {
  return (
    <div className={styles.container}>
      <div className={styles.dropdown}>
        <label htmlFor="location">Choose a location</label>
        <select value={filters.location} name="location" id="location" onChange={(e) => updateFilters("location", e.target.value)}>
          <option value="">All</option>
          <option value="London">London</option>
          <option value="New York">New York</option>
          <option value="Berlin">Berlin</option>
          <option value="Remote">Remote</option>
        </select>
      </div>

      <div className={styles.dropdown}>
        <label htmlFor="type">Choose a job type</label>

        <select value={filters.type} name="type" id="type" onChange={(e) => updateFilters("type", e.target.value)}>
          <option value="">All</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
        </select>
      </div>
    </div>
  );
});

export default JobFilter;
