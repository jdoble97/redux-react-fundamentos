import React from 'react'
import {Provider, connect} from 'react-redux'
import store from '../freecodecamp/index'
import App from './App'
import {mapDispatchToProps, mapStateToProps} from '../freecodecamp/functions_map'

const AppFinal = connect(mapStateToProps, mapDispatchToProps)(App)

export default class AppWrapper extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <Provider store={store}>
                <AppFinal/>
            </Provider>
        )
    }
}