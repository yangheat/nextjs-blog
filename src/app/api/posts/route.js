import { NextResponse } from "next/server"
import { getSortedPostsData } from "../../../../lib/posts"

export function GET(request) {
    const allPostData = getSortedPostsData()
    return NextResponse.json({ allPostData })
}