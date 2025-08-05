import styles from "../styling/SortDropdown.module.css";

function SortDropdown({ filters, updateFilters }) {
  return (
    <div className={styles.container}>
      <p>Sort Jobs</p>
      <select value={filters.sortBy} onChange={(e) => updateFilters("sortBy", e.target.value)}>
        <option value="asc">Newest First</option>
        <option value="dsc">Oldest First</option>
      </select>
    </div>
  );
}

export default SortDropdown;
