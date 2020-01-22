import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'

import logo from '../assets/images/logo.png'

export default function Pesquisar({ navigation }) {
    const [ cep, setCep ] = useState('')

    function pressionarPesquisar() {
        navigation.navigate('Cep', { cep })
    }

    function pressionarLimpar() {
        setCep('')
    }

    return (
        <SafeAreaView style={style.container}>
            <Image source={logo} style={style.image}/>
            <TextInput 
            autoCapitalize = 'none'
            autoCorrect = {false}
            keyboardType = {'numeric'}
            maxLength = {8}
            placeholder = 'Digite o seu CEP (Apenas Números)'
            placeholderTextColor = '#999'
            style = {style.textInput}
            value = {cep}
            onChangeText = {setCep}
            />
            <TouchableOpacity style={style.button} onPress={pressionarPesquisar}>
                <Text style={style.buttonText}>Pesquisar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.buttonLimpar} onPress={pressionarLimpar}>
                <Text style={style.buttonText}>Limpar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 30,
    },
    image: {
        width: 360,
        height: 74 
    },
    textInput: {
        height: 48,
        backgroundColor: '#FFF',
        alignSelf: 'stretch',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        marginTop: 20,
        paddingHorizontal: 15,
    },
    buttonText: {
        fontFamily: 'Arvo-Regular',
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    },
    button: {
        height: 46,
        backgroundColor: '#03416A',
        alignSelf: 'stretch',
        borderRadius: 10,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonLimpar: {
        height: 46,
        backgroundColor: '#bd1616',
        alignSelf: 'stretch',
        borderRadius: 10,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
})