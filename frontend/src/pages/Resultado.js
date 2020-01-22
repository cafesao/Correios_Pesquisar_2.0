import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import './Resultado.css'

import api from '../services/api'
import Carregando from '../pages/Carregando'

import Logo from '../assets/_correio.png'

function Resultado({ match }) {
    const [Cep, setCep] = useState([])
    const [pronto, setPronto] = useState(false)

    useEffect(() => {
        async function Buscar() {
            const cepMatch = match.params.cep
            const response = await api.get(`/${cepMatch}/json`)
            setPronto(true)

            if(response.data.erro === true) {
                setCep(null)
            }
            else {
                setCep(response.data)
            }
        }
        Buscar()
    },[match.params.cep])

    return (
        <div className='resultado-container'>
            {!pronto ? (
                <Carregando type={'bars'} color={'#DDD'}/>
            ) : (
            <div>
                <Link to='/'>
                    <img src={Logo} alt='Logo'/>
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
                    <div className='erro-container'>
                        <strong>Não foi encontrado este Cep</strong>
                        <p>Clique na Logo para voltar para a tela inicial...</p>
                    </div>
                )}            
            </div>                
            )}
        </div>
    )
}

export default Resultado