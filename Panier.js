import {useSelector} from "react-redux"
// YOUSSEF ZOUHIR
export default function Panier(){
    const nombreArticle = useSelector((state)=>state.nombreArticle)

    function handleDeposer(){

    }
    function handleEnlever(){

    }
    return(
        <>
        <h1>{nombreArticle}</h1>
        <button onClick={handleDeposer}>déposer</button>
        <button onClick={handleEnlever}>Enlever</button>
        </>

    )
    

}