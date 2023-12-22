import Link from "next/link";
import { getSortedPostsData } from "../../../lib/posts";
import Date from "../components/date";
import utilStyles from "./styles/utils.module.css";
import layoutStyles from "./styles/layout.module.css";

export default function Page() {
  const allPostsData = getSortedPostsData()
  
  return (
    <>
      {allPostsData.map(({ id, date, title }) => (
        <li className={utilStyles.listItem} key={id}>
          <Link href={`/post/${id}`}>{title}</Link>
          <br />
          <small className={utilStyles.lightText}>
            <Date dateString={date} />
          </small>
        </li>
      ))}
      <div className={layoutStyles.backToHome}>
        <Link href="/">← Back to home</Link>
      </div>
    </>
  );
}
