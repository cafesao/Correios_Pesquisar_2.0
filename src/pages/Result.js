import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import '../css/Result.css'

import api from '../services/api'
import Loading from './Loading'

import logo from '../assets/_correio.png'

function Result({ match }) {
  const [Cep, setCep] = useState([])
  const [ready, setReady] = useState(false)

  useEffect(() => {
    async function Search() {
      const cepMatch = match.params.cep
      const response = await api.get(`/${cepMatch}/json`)
      setReady(true)

      if (response.data.erro === true) {
        setCep(null)
      } else {
        setCep(response.data)
      }
    }
    Search()
  }, [match.params.cep])

  return (
    <div className="resultado-container">
      {!ready ? (
        <Loading type={'bars'} color={'#DDD'} />
      ) : (
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          {Cep !== null ? (
            <div>
              <strong>Cep</strong>
              <p>{Cep.cep}</p>

              <strong>Logradouro</strong>
              <p>{Cep.logradouro}</p>

              <strong>Bairro</strong>
              <p>{Cep.bairro}</p>

              <strong>Cidade</strong>
              <p>{Cep.localidade}</p>

              <strong>Estado</strong>
              <p>{Cep.uf}</p>

              <strong>IBGE</strong>
              <p>{Cep.ibge}</p>
            </div>
          ) : (
            <div className="erro-container">
              <strong>Não foi encontrado este Cep</strong>
              <p>Clique na Logo para voltar para a tela inicial...</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Result
