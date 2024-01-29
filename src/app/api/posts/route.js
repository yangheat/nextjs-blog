import { NextResponse } from 'next/server'
import { getSortedPostsData } from '../../../../lib/posts'

export function GET() {
  const allPostData = getSortedPostsData()
  return NextResponse.json({ allPostData })
}
