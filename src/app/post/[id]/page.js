import Date from '@/components/date'
import MdxContent from '@/components/MdxContent'
import { getPostData } from '../../../../lib/posts'
import utilStyles from '../styles/utils.module.css'
import Utterances from '@/components/Utterances'
import { BROWER_MAIN_TITLE } from 'src/app/layout'

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id
  const postData = await getPostData(id)
  return {
    title: `${postData.title} - ${BROWER_MAIN_TITLE}`,
  }
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
