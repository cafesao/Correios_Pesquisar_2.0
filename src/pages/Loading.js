import React from 'react'
import ReactLoading from 'react-loading'
import '../css/Loading.css'

export default function Loading({ type, color }) {
  return (
    <ReactLoading
      type={type}
      color={color}
      width={300}
      height={100}
      className={'carregando-container'}
    />
  )
}
