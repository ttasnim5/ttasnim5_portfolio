import React from 'react'

function Border() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '12px', width: '100%' }}>
      <div style={{ width: '60%', display: 'flex', flexDirection: 'row' }}>
        <div style={{ flex: 1, height: '1px', backgroundColor: '#82c771' }}></div>
        <div style={{ flex: 1, height: '1px', backgroundColor: '#e8762a' }}></div>
      </div>
    </div>
  )
}

export default Border