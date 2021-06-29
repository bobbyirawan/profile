import React from 'react'
import pdf from "../../assets/certificate.pdf"

const Certificate = () => {
  return (
    <div>
      <embed src={pdf} type="application/pdf" width="100%" height="600px"/>
    </div>
  )
}

export default Certificate