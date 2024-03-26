import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'

export default function Figure({ src, caption }) {
  return (
    <figure style={{ 'margin': '30px 0' }}>
      <div style={{ 'display': 'flex', 'justify-content': 'center' }}>
        <img src={useBaseUrl(src)} alt={caption} style={{ 'display': 'auto', 'border-radius': '10px', 'max-width': '100%', 'width': '600px' }} />
      </div>
      <figcaption style={{ 'text-align': 'center', 'font-style': 'italic' }}>{caption}</figcaption>
    </figure>
  )
}
