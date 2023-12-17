import Link from "next/link";
import { getAllPostIds } from "../../../lib/posts";
import Date from "../components/date";
import utilStyles from "./styles/utils.module.css";

async function getContent() {
  const response = await fetch("http://localhost:3000/api/posts");
  const json = await response.json();
  return json.allPostData;
}

export default async function Page() {
  const allPostsData = await getContent();
  return (
    <>
      {allPostsData.map(({ id, date, title }) => (
        <li className={utilStyles.listItem} key={id}>
          <Link href={`/posts/${id}`}>{title}</Link>
          <br />
          <small className={utilStyles.lightText}>
            <Date dateString={date} />
          </small>
        </li>
      ))}
    </>
  );
}
