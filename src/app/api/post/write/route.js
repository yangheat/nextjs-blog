import { format } from "date-fns"
import { NextResponse } from "next/server"
import { createPost } from "../../../../../lib/posts"

export async function POST(request) {
    const { id, title, content } = await request.json()
    createPost({ id, title, date: format(new Date(), 'yyyy-MM-dd'), content})
    try {
        return NextResponse.json({ state: 200, message: 'Create Success'})
    } catch (err) {
        return NextResponse.json({ state: 500, error: `Create Fail: ${err}`})
    }
}
