import BookmarkIcon from "./BookmarkIcon";

type JobItem = {
    id: number;
    title: string;
    company: string;
    badgeLetters: string;
    date: string;
    daysAgo: number;
    relevanceScore: number;
}
type JobListItemProps = {
  jobItem: JobItem;
}

export default function JobListItem({ jobItem }: JobListItemProps) {
  const { title, company, badgeLetters, daysAgo } = jobItem;
  return (
    <li className="job-item">
      <a className="job-item__link">
        <div className="job-item__badge">{badgeLetters}</div>

        <div className="job-item__middle">
          <h3 className="third-heading">{title}</h3>
          <p className="job-item__company">{company}</p>
        </div>

        <div className="job-item__right">
          <BookmarkIcon />
          <time className="job-item__time">{daysAgo}d</time>
        </div>
      </a>
    </li>
  );
}
