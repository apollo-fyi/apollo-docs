import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'

export default function Figure({ src, caption, width = '600px' }) {
  return (
    <figure style={{ 'margin': '30px 0' }}>
      <div style={{ 'display': 'flex', 'justify-content': 'center' }}>
        <img src={useBaseUrl(src)} alt={caption} style={{ 'display': 'auto', 'border-radius': '10px', 'max-width': '100%', 'width': width }} />
      </div>
      <figcaption style={{ 'text-align': 'center', 'font-style': 'italic' }}>{caption}</figcaption>
    </figure>
  )
}
