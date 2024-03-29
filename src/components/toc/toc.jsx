import React from "react"
import styled from "styled-components"

const Toc = styled.div`
  opacity: 0.6;
  margin: 1rem 1rem 1rem 0;
  border-left: 4px solid;
  font-size: 0.85em;
  ul,li {
    list-style-type: none;
  }
  li:hover {opacity: 0.9;}
`

export const TOC = props => {
  const toc = props.toc

  return <Toc dangerouslySetInnerHTML={{ __html: toc }} />
}
