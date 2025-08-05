import styles from "../styling/JobSearch.module.css";

function JobSearch({ filters, updateFilters }) {
  return (
    <div className={styles.container}>
      <label htmlFor="search">Search Jobs</label>
      <input
        onChange={(e) => updateFilters("searchTerm", e.target.value)}
        value={filters.searchTerm}
        name="search"
        id="search"
        type="text"
        placeholder="Search for a job title..."
      />
    </div>
  );
}

export default JobSearch;
