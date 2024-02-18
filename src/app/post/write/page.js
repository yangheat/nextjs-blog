'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'

export default function Page() {
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
    </>
  )
}
