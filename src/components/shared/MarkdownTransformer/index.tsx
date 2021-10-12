import React from "react";
import ReactMarkdown from 'react-markdown'


interface Props {
  markdown: string
}

const MarkdownTransformer: React.FC<Props> = (props) => {

  return <ReactMarkdown>{props.markdown}</ReactMarkdown>

}

export default MarkdownTransformer;