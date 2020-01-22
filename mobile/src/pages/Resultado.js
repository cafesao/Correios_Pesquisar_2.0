import React, { useEffect, useState } from 'react'
import { View, Text, Image, SafeAreaView, StyleSheet, ScrollView } from 'react-native'

import api from '../services/api'

import logo from '../assets/images/logo.png'

export default function Resultado({ navigation }) {
    const numeroCep = navigation.getParam('cep')
    const [ cep, setCep ] = useState('')

    useEffect(() => {
        async function pesquisarApi() {
            if(numeroCep === '') {
                setCep(false)
            }
            else {
                const response = await api.get(`/${Verificar(numeroCep)}/json`)

                if(response.data.erro === true) {
                    setCep(false)
                }
                else {
                    setCep(response.data)
                }
            }
        }

        pesquisarApi()
    },[numeroCep])

    function Verificar(numeros) {
        return numeros.replace(/\D/g, '')
    }

    return(
        <SafeAreaView>
            <Image source={logo} style={style.image}/>
            {cep ? (
                <ScrollView>
                    <View style={style.container}>
                        <Text style={style.textTitulo}>Cep</Text>
                        <Text style={style.textInfo}>{cep.cep}</Text>

                        <Text style={style.textTitulo}>Logradouro</Text>
                        <Text style={style.textInfo}>{cep.logradouro}</Text>

                        <Text style={style.textTitulo}>Bairro</Text>
                        <Text style={style.textInfo}>{cep.bairro}</Text>

                        <Text style={style.textTitulo}>Cidade</Text>
                        <Text style={style.textInfo}>{cep.localidade}</Text>

                        <Text style={style.textTitulo}>Estado</Text>
                        <Text style={style.textInfo}>{cep.uf}</Text>

                        <Text style={style.textTitulo}>IBGE</Text>
                        <Text style={style.textInfo}>{cep.ibge}</Text>
                    </View>
                </ScrollView>
            ) : (
                <View style={style.container}>
                    <Text style={style.erro}>Não existe o cep informado!</Text>
                    <Text style={style.erroInfo}>Clique em voltar no lado esquerdo superior...</Text>
                </View>
            )}
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        marginHorizontal: 10
    },
    image: {
        marginTop: 30,
        width: 360,
        height: 74 
    },
    textTitulo: {
        fontFamily: 'Merriweather-Regular',
        paddingTop: 25,
        fontSize: 27,
        color: '#03416A'
    },
    textInfo: {
        fontFamily: 'Arvo-Regular',
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom: 10,
        fontSize: 20,  
        fontWeight: 'bold',
        lineHeight: 30,
        marginTop: 5,
        color: '#000',
    },
    erro: {
        paddingTop: 50,
        fontSize: 25,
        color: '#03416A'
    },
    erroInfo: {
        paddingTop: 10,
        fontSize: 15,
        lineHeight: 20,
        marginTop: 5,
        color: '#c8c8c8'
    }
})