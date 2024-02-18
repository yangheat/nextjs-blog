'use client'

import Button from '@/components/Button'
import { useEffect } from 'react'

export default function Error(error, reset) {
  useEffect(() => {
    console.error(error)
  }, [error])
  return (
    <>
      <h1>페이지를 찾을 수 없습니다.(URL을 확인해주세요.)</h1>
      <Button onClick={() => reset()}>Try again</Button>
    </>
  )
}
