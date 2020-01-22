import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Pesquisar from './pages/Pesquisar'
import Resultado from './pages/Resultado'

export default createAppContainer(
    createStackNavigator({
        Inicio: Pesquisar,
        Cep: Resultado
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#03416A',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        },
    }
    )
)