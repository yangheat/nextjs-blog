import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { serialize } from 'next-mdx-remote/serialize'

// eslint-disable-next-line no-undef
const postsDirectory = path.join(process.cwd(), 'posts')
const FILE_EXTENSION_REGEX = /(\.md|\.mdx)$/

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(FILE_EXTENSION_REGEX, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    }
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(FILE_EXTENSION_REGEX, ''),
      },
    }
  })
}

export async function getPostData(id) {
  const mdExtFullPath = path.join(postsDirectory, `${id}.md`)
  if (fs.existsSync(mdExtFullPath)) {
    const mdExtFileContents = fs.readFileSync(mdExtFullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(mdExtFileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content)
    const mdExtContentHtml = processedContent.toString()

    // Combine the data with the id
    return {
      id,
      mdExtContentHtml,
      ...matterResult.data,
    }
  } else {
    const mdxExtFullPath = path.join(postsDirectory, `${id}.mdx`)
    const mdxExtFileContents = fs.readFileSync(mdxExtFullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(mdxExtFileContents)
    const mdxSource = await serialize(matterResult.content)

    // Combine the data with the id
    return {
      id,
      mdxSource,
      ...matterResult.data,
    }
  }
}

export function getPostBySlug(slug) {
  const fileNames = fs.readdirSync(postsDirectory)
  const findFile = fileNames.find((fileName) => {
    return fileName.replace(FILE_EXTENSION_REGEX, '') === slug
  })

  if (findFile) {
    return { slug: `/post/${slug}` }
  }
}

export function createPost({ id, title, date, content }) {
  const fullPath = path.join(postsDirectory, `${id}.md`)

  const data = `---
title: '${title}'
date: '${date}'
---

${content}`

  fs.writeFileSync(fullPath, data)
}
