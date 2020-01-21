import React, {useState} from 'react';
import './Pesquisar.css';

import Logo from '../assets/_correio.png'

function Pesquisar({ history }) {
  const [Cep, SetCep] = useState()

  function handlePesqusiar(e) {
    e.preventDefault()

    function Verificar(CepParams) {
      if(!CepParams) {
        alert('Digite o seu Cep')
        return false
      }
  
      else if(CepParams.length !== 8) {
        alert('Seu Cep deve conter 8 Digitos')
        return false
      }
  
      else if(CepParams.search(/(\D)/) !== -1) {
        alert('O Cep deve conter apenas numeros')
        return false
      }

      return true
    }

    if(Verificar(Cep) === true){
      history.push(`/ws/${Cep}`)
    }
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
        />   
        <button className='btn' type='submit'>Pesquisar</button>
        <button className='btn' type='reset' onClick={handleLimpar}>Limpar</button>
      </form>
    </div>
  )
}

export default Pesquisar;