import React from 'react'

export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            input: '',
        }
    }
    handleChange = e => {
        this.setState({
            input: e.target.value
        })
    }

    submitMessage= ()=>{
        this.props.submitNewMessage(this.state.input)
        this.setState({
            input: ''
        })
    }
    render() {
        return (
            <div>
                <h2>Escribe un mensaje</h2>
                <input type="text" onChange={this.handleChange} value={this.state.input}/>
                <button onClick={this.submitMessage}>
                    Añadir mensaje
                </button>
                <ul>
                    {this.props.messages.map((x,id)=>{
                        return (<li key={id}>{x}</li>)
                    })}
                </ul>
            </div>
        )
    }
}