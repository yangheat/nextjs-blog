import Date from '@/components/date'
import MdxContent from '@/components/MdxContent'
import { getAllPostIds, getPostData } from '../../../../lib/posts'
import utilStyles from '../styles/utils.module.css'
import Utterances from '@/components/Utterances'

export function generateStaticParams() {
  const postInfos = getAllPostIds()
  return postInfos.map((postInfo) => postInfo.params)
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
      {postData.mdExtContentHtml && (
        <div dangerouslySetInnerHTML={{ __html: postData.mdExtContentHtml }} />
      )}
      {postData.mdxSource && <MdxContent source={postData.mdxSource} />}
      <Utterances />
    </>
  )
}
