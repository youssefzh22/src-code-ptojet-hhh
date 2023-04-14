// import React from "react";
// class ClassTest extends React.Component
// {
//     constructor(props)
//     {
//         super(props)
//         this.state = {number : 0 , text : '...'};
//     }
//     incrementNumber = () => this.setState({number : this.state.number + 1});
//     decremntNumber  = () => this.setState({number : this.state.number - 1});

  
//     componentDidUpdate()
//     {
//         console.log('Updated !') ;
//     }    
//     render()
//     {
//         return (
//             <React.Fragment>
//                 <h1>{this.state.number}></h1> </br>
//                 <button onClick={this.incrementNumber}>+</button>
//             </React.Fragment>
//         )
        

//     }
    

//     componentDidMount()
//     {
//         console.log('hello') ;
//     }

// }
// export default ClassTest
import React, { useEffect, useState } from 'react'

//1
export const Tp = (x,y) =>{
    return  {x} + {y}
} ; 

//2
export class Salutation extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
                <p>
                    Bonjour {this.props.Name.nom} 
                        {" "}                
                            {this.props.Name.prenom  }
                    </p>
            </>
        )
    }
}

//3

export function Label()  {
    


    const [test,setTest] = useState(
                                    [
                                   {id:"1",label:"2",qte:"4"}
                                    ] );
                                    const [test1,setTest1]= useState([])
    const [id1,setid] = useState();
    const [label1,setlabel] = useState();
    const [qte1,setqte] = useState();
    const [remise,setRemise] = useState();

      


    

    const Addtask = (e)=>{
            let n = {id:id1,label:label1,qte:qte1}
            setTest([...test,n])
            
            console.log(test)
    
  
}  

const show = ()=>{
   console.log(test)
}
    return(

        <div>
          
            <input type="text" value={id1}  onChange={(e)=>{setid(e.target.value)}} /> <br/> <br/> 
            <input type="text" value={label1}   onChange={(e)=>{setlabel(e.target.value)}}/> <br/> <br/> 
            <input type="text" value={qte1}  onChange={(e)=>{setqte(e.target.value)}}/> <br/>

            <br/>
            <button style={{backgroundColor:"red"}} type="button " className="btn btn-primary" onClick={Addtask}>ajouter</button>
            <button type="button " className="btn btn-primary" onClick={show}>show</button>
            <h1>{remise}</h1>

            <hr/>
            <ul>
                {test.map((user,items)=>
                <div>
                    <li key={items}>{user.id}</li>  
                    <li key={items}>{user.label}</li>  
                    <li key={items}>{user.qte}</li>  
       
                    <ul>
                        
                    </ul>
                    
                </div>
           )}
       </ul>
     
  
        </div>
    );

}
