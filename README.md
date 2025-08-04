## Plan

🧱 Components

- JobList – parent container
- JobCard – presentational
- JobSearch – search input
- JobFilter – filter by location/type
- SortDropdown – sort by date

### JobList

Role:

- Central controller for state + data logic

Holds:

- allJobs (static dataset or fetched)
- filteredJobs (result after search, filter, sort)
- searchTerm, activeFilters, sortOrder

Passes filtered list to JobCard

### JobCard

💡 Pure presentational component

Props:

```ts
{
  id: number,
  title: string,
  company: string,
  location: string,
  type: string,
  postedAt: string
}
```

Notes:

- Stateless
- Rendered by JobList
- Could include data-testid if you test later

### JobFilter

Props:

- onFilterChange(filters: { location: string[], type: string[] })
- activeFilters (optional, if you want the parent to control UI state too)

Internal state (optional):

- Local checked state for filters (if not controlled externally)

UI:

- Checkbox group or buttons for:
- Location: Remote, London, New York, Berlin

Job Type: Full-time, Part-time, Contract

✅ Suggestion: Don't pass the full job list in — just pass filter criteria up. Keep data logic centralized in the parent.

### JobSearch

Props:

- onSearchChange(searchTerm: string)
- (Optional) searchValue if controlled

UI:

```html
<input type="text" placeholder="Search by title or company" />
```

Notes:
Consider useDebounce for nicer UX in larger apps
Use onChange to lift input value up

### SortDropdown

Props:

- onSortChange(order: "asc" | "desc")
- currentSort (optional)

UI:

- Dropdown or radio/toggle between:
  - Newest first (desc)
  - Oldest first (asc)

Notes:
Keep sorting logic in parent to avoid unnecessary prop drilling
