'use client'

import { formatDistanceToNow } from 'date-fns'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

function CurrentState() {
  const pathname = usePathname()
  // 최초 접근 시에 저장되도록 설정
  const [visitedTime] = useState(new Date())

  return (
    <div>
      <h2>pathname: {pathname}</h2>
      <h2>
        visited:{' '}
        {formatDistanceToNow(visitedTime, {
          includeSeconds: true,
          addSuffix: true,
        })}
      </h2>
    </div>
  )
}

export default CurrentState
