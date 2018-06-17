import React from 'react'

const infoStyles = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
  fontSize: '20px',
  padding: '5px',
  fontWeight: 'bolder'
}

export const Info = () => (
  <div style={infoStyles}>
    <strong>
      Sorry! The simulator only works on larger displays currently.
    </strong>
  </div>
)
