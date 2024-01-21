'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function BackPage() {
  const pathname = usePathname()
  return (
    <div style={{ margin: '3rem 0 0' }}>
      {pathname === '/post' ? (
        <Link href="/">← Back to home</Link>
      ) : (
        <Link href="/post">← Back to post list</Link>
      )}
    </div>
  )
}
