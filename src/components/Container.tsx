import Sidebar from "./Sidebar";
import JobItemContent from "./JobItemContent";

export default function Container({ jobItems }) {
  return <div className="container">
    <Sidebar jobItems={jobItems} />
    <JobItemContent />
  </div>;
}
