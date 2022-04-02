import React from 'react';  

class ClasesUseState extends React.Component {

    state = {
        contador: 0,
    };

    presionarBoton = () => this.setState(
        {contador: this.state.contador + 1}
    );

    render() {
        const {contador} = this.state;

        return (
            <div>
                <p>Presione al contador: {contador} </p>
                <button onClick={this.presionarBoton}> Presionamé al component class</button>    
            </div>
        );
    }
}

export default ClasesUseState;