import React, { useState } from 'react'
import '../css/Search.css'

import Logo from '../assets/_correio.png'

export default function Search({ history }) {
  const [Cep, SetCep] = useState()

  function handleSearch(e) {
    e.preventDefault()

    if (verify(Cep)) {
      history.push(`/ws/${Cep}`)
    }
  }

  function verify(CepParams) {
    if (!CepParams || CepParams.length !== 8) {
      alert('Digite o seu Cep')
      return false
    } else if (CepParams.search(/(\D)/) !== -1) {
      alert('O Cep deve conter apenas numeros')
      return false
    }

    return true
  }

  function handleClean() {
    SetCep('')
  }

  return (
    <div className="pesquisar-container">
      <form onSubmit={handleSearch}>
        <img src={Logo} alt="Logo do Site" />
        <input
          placeholder="Digite seu CEP"
          value={Cep}
          onChange={(e) => SetCep(e.target.value)}
          maxLength={8}
        />
        <button className="btn" type="submit">
          Pesquisar
        </button>
        <button className="btn" type="reset" onClick={handleClean}>
          Limpar
        </button>
      </form>
    </div>
  )
}
