import './App.css';
import {useEffect, useState} from 'react'

function Hooks(){
    const [a,b,...c] = [2,3,4,5,6,7,8,9];
    const [nombre,apellido] = ["Luis", "navas"]
    const [loading,setLoading] = useState(false);
    const [name,setName]=useState("luis");
    const [data,setData]=useState([]);
    const [user,setUser]=useState({})
    
    const cambiar=()=>{
        setName("Salomon")
        setUser({name:"tomas"})
        
    }
    useEffect(()=>{//se utiliza cuando renderiza la pagina
        setUser({name:"juan"})
        
        setTimeout(() => {
            setLoading(true)
            // setData([{data:"data de api"}])
        }, 2000);
    })
    return (
        <div className="container">
            <ul>
              
            </ul>
        </div>
    )
}
export default Hooks;