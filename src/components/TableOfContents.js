import React from "react"
import './table-of-contents.css';

export default function TableOfContents({ contentsHtml }) {
  return (
    <div className="TableOfContents">
      <span className="TableOfContents__header">Contents</span>
      <div className="TableOfContents__contents" dangerouslySetInnerHTML={{__html: contentsHtml}} />
    </div>
  )
}