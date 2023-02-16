import { useNavigate } from "react-router-dom"
export const Footer=()=>{
    const next=useNavigate()
    const back=useNavigate()
    return(
        <>
        <footer>
            <button onClick={()=>back(-1)}>Go Back</button>
            <button onClick={()=>next('Plans')}>Next Step</button>
        </footer>
        </>
    )
}