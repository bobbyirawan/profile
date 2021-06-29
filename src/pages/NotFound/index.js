import React from 'react'
import { Link } from 'react-router-dom'
import image from './Notfound.svg'
import { Img, PageImage } from './style'

const NotFound = () => {
  return (
    <PageImage>
      <Img src={image} alt="not found"/>
      <h1 style={{textAlign: "center"}}>Halaman Tidak Ditemukan</h1>
      <Link to="/">
        <h1>Kembali</h1>
      </Link>
    </PageImage>
  )
}

export default NotFound
