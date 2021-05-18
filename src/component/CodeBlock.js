import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism"

const CodeBlock = ({ language, value }) => {
    console.log(`SyntaxHighlighter, ${value}`)
  return (
    <SyntaxHighlighter language={'javascript'} style={tomorrow}>
      {value}
    </SyntaxHighlighter>
  )
}

export default CodeBlock