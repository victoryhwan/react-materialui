// About.js
import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../component/CodeBlock'
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles((theme) => ({
    paper: {
      margin: theme.spacing(1,1),
      padding: theme.spacing(1,1),
      maxWidth: 1000,
      minWidth: 'auto',
      alignContent: 'center'
    //   textAlign: 'center',
      // color: theme.palette.text.secondary,
    }
  }));

const markdown = `
# 헤딩
## 헤딩
### 헤딩
#### 헤딩
##### 헤딩
###### 헤딩

**굵게**

일반 텍스트

\`\`\`
    코드블럭'
\`\`\`

*기울이기*

글자 \`\`배경색\`\`

> 인용문
`;

const MarkDown = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <ReactMarkdown components={{ code : CodeBlock}} children={markdown}/>
        </Paper>
    );
};

export default MarkDown;