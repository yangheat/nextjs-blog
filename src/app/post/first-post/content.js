'use client'

import { useEffect, useState } from "react"
import utilStyles from "../styles/utils.module.css";

export default function Content() {
  const [allPostsData, setAllPostsData] = useState([])
  const getAllPostData = async () => {
    const response = await fetch('/api/posts')
    const data = await response.json()
    setAllPostsData(data.allPostData)
  }

  useEffect(() => {
    getAllPostData()
  }, [])
  return (
    <>
      {/* Keep the existing code here */}
      
      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {
              allPostsData ? 
              allPostsData.map(({ id, date, title }) => (
                <li className={utilStyles.listItem} key={id}>
                  {title}
                  <br />
                  {id}
                  <br />
                  {date}
                </li>
              )) : null
            }
          </ul>
        </section>
      </>
  )
}
