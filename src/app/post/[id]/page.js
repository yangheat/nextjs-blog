import Date from "../../components/date"
import { getAllPostIds, getPostData } from "../../../../lib/posts"
import utilStyles from '../styles/utils.module.css';

export function generateStaticParams () {
    const params = getAllPostIds()
    return params.map((param) => ({
        id: param.id
    }))
}

export default async function Page({ params }) {
    const { id } = params
    
    const postData = await getPostData(id)
  return (
    <>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <div className={utilStyles.lightText}>
        <Date dateString={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </>
  )
}
