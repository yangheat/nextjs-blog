'use client'

import { memo } from 'react'

function Utterances() {
  return (
    <section
      ref={(elem) => {
        if (!elem) {
          return
        }

        const scriptElement = document.createElement('script')
        scriptElement.setAttribute('src', 'https://utteranc.es/client.js')
        scriptElement.setAttribute('repo', 'yangheat/nextjs-blog')
        scriptElement.setAttribute('issue-term', 'pathname')
        scriptElement.setAttribute('theme', 'github-dark-orange')
        scriptElement.setAttribute('crossorigin', 'anonymous')
        scriptElement.async = true

        elem.appendChild(scriptElement)
      }}
    />
  )
}

export default memo(Utterances)
