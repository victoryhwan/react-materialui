import React from "react"
// import Prism from "prismjs"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism"

const CodeBlock = ({ language, children }) => {
    console.log(`SyntaxHighlighter, language:${language}, children:${children}`)
  return (
    <SyntaxHighlighter language={'javascript'} style={tomorrow}>
      {children}
    </SyntaxHighlighter>
  )
}

// const CodeBlock = ({ language, value }) => {
// 	// 1. no language was typed
// 	// or 2. language doesnt exist
// 	// if (!language || !Prism.languages[language] || !value)
// 	// 	return <BlankCodeBlock value={value} />;

// 	var html = Prism.highlight(value, Prism.languages[language]);
// 	var cls = 'language-' + language;

// 	return (
// 		<pre className={cls}>
// 			<code dangerouslySetInnerHTML={{ __html: html }} className={cls} />
// 		</pre>
// 	);
// }

export default CodeBlock