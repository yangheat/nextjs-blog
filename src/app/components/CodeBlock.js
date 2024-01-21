import { rainbow } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import SyntaxHighlighter from 'react-syntax-highlighter'

const CopyButton = ({ target }) => {
  const handleCopy = async () => {
    try {
      console.log(target)
      await navigator.clipboard.writeText(target)
      alert('copied')
    } catch (error) {
      alert(`fail copied: ${error}`)
    }
    console.log('copy')
  }

  return (
    <button
      onClick={handleCopy}
      className="absolute top-1 right-1 rounded-lg px-2  bg-white dark:text-gray-800"
    >
      copy
    </button>
  )
}

export default function CodeBlock({ children }) {
  return (
    <div className="relative">
      <CopyButton target={children} />
      <SyntaxHighlighter showLineNumbers style={rainbow}>
        {children}
      </SyntaxHighlighter>
    </div>
  )
}
