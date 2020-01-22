import React from 'react'
import ReactLoading from 'react-loading'
import './Carregando.css'

export default function Carregando({ type, color }) {
    return (
        <ReactLoading type={type} color={color} width={300} height={100} className={'carregando-container'}/>
    )
}