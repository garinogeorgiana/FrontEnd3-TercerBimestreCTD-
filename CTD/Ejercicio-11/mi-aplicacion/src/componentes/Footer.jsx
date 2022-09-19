import React from "react"
class Footer extends React.Component{
    cambiar(){
        console.log("Se ejecuto el evento!")
    }
    render(){
        return(
            <footer>
                <h2 onClick={()=>this.cambiar()}>Soy el footer</h2>
            </footer>
        )
    }
} 

export default Footer;