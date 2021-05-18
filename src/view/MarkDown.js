// About.js
import React from 'react';

import ReactMarkdown from 'react-markdown';
import CodeBlock from '../component/CodeBlock'

const markdown = `
# 헤딩
**굵게**

일반 텍스트

\`\`\`
    코드블럭
\`\`\`

*기울이기*

글자 \`배경색\`

> 인용문
`;

const MarkDown = () => {
    return (
        <ReactMarkdown renderers={{ code : CodeBlock}}>{markdown}</ReactMarkdown>
    );
};

export default MarkDown;