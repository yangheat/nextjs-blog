'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

export default function Page() {
  const router = useRouter()

  useEffect(() => {
    // dev 상태에선 동작하지 않음
    router.prefetch('/post/ssg-ssr')
  }, [])

  const [showLink, setShowLink] = useState(false)
  const idRef = useRef()
  const titleRef = useRef()
  const contentRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = idRef.current.value
    const title = titleRef.current.value
    const content = contentRef.current.value

    fetch('/api/post/write', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, title, content }),
    })
      .then((response) => {
        try {
          return response.json()
        } catch (err) {
          throw new Error('fetch error')
        }
      })
      .then((data) => {
        setShowLink(true)
        alert(data.message)
      })
      .catch((err) => alert(`request error ${err}`))
  }

  const handleReset = () => {
    setShowLink(false)
    idRef.current.value = ''
    titleRef.current.value = ''
    contentRef.current.value = ''
  }

  return (
    <>
      <h1>Write a post</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" placeholder="ID" required ref={idRef} />
        <br />
        <br />
        <input
          type="text"
          name="title"
          placeholder="TITLE"
          required
          ref={titleRef}
        />
        <br />
        <br />
        <textarea
          type="text"
          name="content"
          placeholder="CONTENT"
          required
          ref={contentRef}
        ></textarea>
        <br />
        <br />
        <input
          type="submit"
          className="bg-pink-500 rounded px-2 mr-2"
          value="Create"
        />
        <input
          type="button"
          className="bg-pink-500 rounded px-2"
          value="reset"
          onClick={handleReset}
        />
      </form>
      {showLink && (
        <Link href={`/post/${idRef.current.value}`}>Created Post</Link>
      )}
      <br />
      <br />
      <button
        className="bg-pink-200 rounded px-2"
        onClick={() => router.push('/post/ssg-ssr', { scroll: false })}
      >
        router.push
      </button>
      <br />
      <br />
      <button
        className="bg-pink-200 rounded px-2"
        onClick={() => router.replace('/post/ssg-ssr')}
      >
        router.replace
      </button>
      <br />
      <br />
      <button
        className="bg-pink-200 rounded px-2"
        onClick={() => router.back()}
      >
        router.back
      </button>
      <br />
      <br />
      <button
        className="bg-pink-200 rounded px-2"
        onClick={() => router.refresh()}
      >
        router.refresh
      </button>
      <br />
      <br />
      <button
        className="bg-pink-200 rounded px-2"
        onClick={() => router.forward()}
      >
        router.forward
      </button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/**
       * scroll 옵션을 true로 주는 경우 스크롤이 이동하지 않음
       * scroll 옵션을 false로 주는 경우 스크롤이 이동함.
       * 특이점은 false로 주는 경우 처음 화면에 접근하는 경우에는 스크롤이 이동하지 않음
       * prefetch 기능을 추가하면 스크롤이 이동하는 겻으로 보아 한 번 이상 화면이 로딩되어야하는 것으로 보임.
       */}
      <Link
        href="/post/ssg-ssr"
        style={{ textDecoration: 'underline', color: '-webkit-link' }}
        scroll={false}
      >
        scroll option is false
      </Link>
    </>
  )
}
