
import React, {useState} from "react" ;

function FunctionState()
{
    const [nom,SetNom]=useState(",,,")
    const [prenom,SetPrenom]=useState(",,,")
    const [greeting , setGreeting]=useState('')

    let changevalue = () => {
        setGreeting('hello '+" "+ nom +" "+ prenom)
  
    }


    return (
        <React.Fragment>
        <h1> the first name is :{nom} </h1>
        <h1> the last name is :{prenom} </h1>
        <input onChange={(e) => (SetNom(e.target.value))}></input>
        <input onChange={(e) => (SetPrenom(e.target.value))}></input>

        {/* =================================================================== */}

        <h1>{greeting}</h1>
        <input onChange={(e) => (SetNom(e.target.value))}></input>
        <input onChange={(e) => (SetPrenom(e.target.value))}></input>
        <button onClick={changevalue}>CHECK</button>
        </React.Fragment>
        
    )
}
export default FunctionState