import React, {Component} from "react";

class ComponenteBis extends Component{ 
    render(){
        /* usamos las propiedades, el cual ES UN OBJETO que
        se le pega al this de la clase */
        return <h2>{this.props.msg}</h2>
    }
}

export default ComponenteBis