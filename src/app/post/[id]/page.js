import { getAllPostIds, getPostData } from "../../../../lib/posts"

export function generateStaticParams () {
    const params = getAllPostIds()
    console.log('generateStaitcParmas')
    return params.map((param) => ({
        id: param.id
    }))
}

export default function Page({ params }) {
    const { id } = params
    
    const postData = getPostData(id)
  return (
    <>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
    </>
  )
}
