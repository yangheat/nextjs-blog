import { NextResponse } from "next/server"
import { getSortedPostsData } from "../../../../lib/post"

export function GET(request) {
    const allPostData = getSortedPostsData()
    return NextResponse.json({ allPostData })
}