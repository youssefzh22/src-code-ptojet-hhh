import React,{useState,useEffect} from "react";
import axios from "axios";

function AfficheAxios(){
    const[product,setProduct]=useState([])
        useEffect(()=>{
        axios.get('https://api.publicapis.org/entries')
        (res)=> { setProduct(res.data) } } ,[] )
    return(
        <ReactFragment>
            <h1>hello world</h1>
            {
                product.map(
                    (item)=>{
                        return(<p key={item.id} >{item.name}</p>)
                    }
                )
            }
        </ReactFragment>
    )

}
export default AfficheAxios