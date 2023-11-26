import utilStyles from "../styles/utils.module.css";
// import Content from "./content";

async function getContent () {
  const response = await fetch('http://localhost:3000/api/posts')
  const json = await response.json()
  return json.allPostData
}

export default async function Page() {
  const allPostsData = await getContent()

  return (
    <>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      {/* Keep the existing code here */}
      
      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                {title}
                <br />
                {id}
                <br />
                {date}
              </li>
            ))}
          </ul>
        </section>
        
        {/* <Content /> */}
    </>
  );
}
