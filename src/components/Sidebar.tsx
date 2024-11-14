import ResultsCount from "./ResultsCount";
import SortingControls from "./SortingControls";
import JobList from "./JobList";
import PaginationControls from "./PaginationControls";


export default function Sidebar({ jobItems }) {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
          <ResultsCount />
          <SortingControls />
      </div>

        <JobList jobItems={jobItems} />

        <PaginationControls />
    </div>
  );
}
