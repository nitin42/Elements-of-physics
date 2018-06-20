import React from 'react'

const loaderStyles = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '100px'
}

export const Loading = () => (
  <div style={loaderStyles}>
    <div className="loading">
      <span role="img" aria-label="loading">
        🌀
      </span>
    </div>
  </div>
)
