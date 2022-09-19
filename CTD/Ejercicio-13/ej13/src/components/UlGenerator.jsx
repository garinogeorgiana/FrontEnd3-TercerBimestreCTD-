import React from "react";


const UlGenerator = (props) => {
    
    {
        
        if(props.type == "invitados"){
        return (<React.Fragment key={1}>
            
            <ul key={1}>
                {props.li}
                <li key={1}>{props.array[0].name+" esta invitado a la fiesta"}</li>
                <li key={2}>{props.array[1].name+" no esta invitado a la fiesta"}</li>
                <li key={3}>{props.array[2].name+" esta invitada a la fiesta"}</li>
            </ul>
            
        </React.Fragment>)
    }
    
    if(props.type == "tareas"){
        return (
        <React.Fragment key={2}>
            <ul key={2}>
                {props.li}
                <li key={1}>{props.array[0].name+" "+props.array[0].task}</li>
                <li key={2}>{props.array[1].name+" "+props.array[0].task}</li>
                <li key={3}>{props.array[2].name+" "+props.array[0].task}</li>
            </ul>
            
        </React.Fragment>)
    }
    
    
}
}

export default UlGenerator;

{/* <li>{item.name+" "+ (item.estaInvitado ? "está" : "no está") + " invitado a la fiesta"}</li> */}                       