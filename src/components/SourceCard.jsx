import React from 'react'

const SourceCard = ({ heading, link }) => {
  return (
    <div>
      <div style={{ width: "75vw" }}>
        <div className="visit-card">
          <h2 style={{ cursor: "pointer" }} onClick={() => window.open(`${link}`)}>{heading}</h2>
        </div>
      </div>
    </div>
  )
}

export default SourceCard