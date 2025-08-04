import JobList from "./components/JobList";
import { jobs } from "./data/jobs";

function App() {
  return <JobList data={jobs} />;
}

export default App;
