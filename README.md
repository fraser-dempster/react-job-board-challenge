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

### Improvements

These are small-to-medium enhancements that would improve code quality, UX, or maintainability:

♻️ Make sortByDate() function pure by avoiding in-place mutation of the data array

🧼 Format job posting dates using Intl.DateTimeFormat or a utility like date-fns for better readability

🔄 Improve sort key naming: Rename "dsc" to "desc" to match common naming conventions

🧪 Add empty state UI (e.g. "No jobs found" when filters return nothing)

🧪 Add loading state (simulate loading via useEffect and setTimeout)

🧠 Extract filtering logic into a custom hook for testability and reuse: useFilteredJobs()

🎯 Add aria-labels and improve accessibility in form elements and buttons

🧹 DRY up dropdowns by mapping over arrays instead of hardcoding option tags

🎨 Improve mobile responsiveness (e.g. wrap job cards in a flexbox or grid layout)

### Stretch Goals

These are more advanced enhancements that could significantly improve the app:

🔍 Debounced search input using a custom useDebounce() hook instead of useDeferredValue

💾 Persist filters/search in localStorage so state is retained across page reloads

🔀 Client-side pagination (e.g. 5 jobs per page with "Next"/"Previous" controls)

🎯 Add tag-based filtering (e.g. click on job location or type to filter)

🧪 Write unit/integration tests using React Testing Library (e.g. search/filter/sort logic)

🌐 Fetch jobs from an external API or local JSON file using fetch() or axios

🧠 Use useReducer instead of multiple useState calls to manage complex filter state

💅 Add animations using framer-motion or CSS transitions for filtering/sorting changes

💼 Add “Save job” / “Favorite” button with state stored in memory or localStorage

🌙 Implement dark mode toggle (e.g. using CSS variables or Tailwind theme toggle)
