import React, {useState} from 'react';
import './Pesquisar.css';

import Logo from '../assets/_correio.png'

export default function Pesquisar({ history }) {
  const [Cep, SetCep] = useState()

  function handlePesqusiar(e) {
    e.preventDefault()

    if(Verificar(Cep)){
      history.push(`/ws/${Cep}`)
    }
  }

  function Verificar(CepParams) {
    if(!CepParams || CepParams.length !== 8) {
      alert('Digite o seu Cep')
      return false
    }

    else if(CepParams.search(/(\D)/) !== -1) {
      alert('O Cep deve conter apenas numeros')
      return false
    }

    return true
  }

  function handleLimpar() {
    SetCep('')
  }

  return (
    <div className="pesquisar-container">
      <form onSubmit={handlePesqusiar}>
        <img src={Logo} alt='Logo do Site'/>
        <input 
          placeholder='Digite seu CEP'
          value={Cep}
          onChange={e => SetCep(e.target.value)}
          maxLength = {8}
        />   
        <button className='btn' type='submit'>Pesquisar</button>
        <button className='btn' type='reset' onClick={handleLimpar}>Limpar</button>
      </form>
    </div>
  )
}