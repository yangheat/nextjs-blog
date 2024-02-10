'use client'

import CodeBlock from './CodeBlock'
import { MDXRemote } from 'next-mdx-remote'
import dynamic from 'next/dynamic'

const Button = dynamic(() => import('./Button'), {
  loading: () => <p>Loading...</p>,
})
const components = { Button, CodeBlock }

export default function MdxContent({ source }) {
  return <MDXRemote {...source} components={components} />
}
