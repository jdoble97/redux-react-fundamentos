const state = []
//Función que permite el acceso a los estados requeridos por cada componente, a través de las props
//Lo que se devuelva en la función es lo que se desea acceder en dicho componente
/* SIRVE PARA ACCEDER AL ESTADO */
export const mapStateToProps = (state) => {
    return { messages: state }
}

////////////////////////////////////////////////
//mapDispatchToProps: función que provee un action creator al componente para que este lo llame y se haga la operacion
//apropiada en el store
//mapDispatchToProps: recibe por parámetro un action creator y devuelve un objeto, internamente se llama a dispatch

const addMessage = (message) => {
    return {
        type: 'ADD',
        message: message
    }   
};

// Change code below this line
/* SIRVE PARA ACTUALIZAR EL ESTADO*/
export const mapDispatchToProps = (dispatch) => {
    return {
        submitNewMessage: function(message){
            //Mejor usar un action creator que devulve una accion
            dispatch(addMessage(message))
        }
    }
}

/* 
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

const mapStateToProps = (state) => {
  return {
    messages: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    }
  }
};

class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3>This is a Presentational Component</h3>
  }
};

const connect = ReactRedux.connect;
// Change code below this line
const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Presentational)


*/