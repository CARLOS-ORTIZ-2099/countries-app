import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import ThemeContext from "../../context/ThemeContext"
import { PaisInfo } from "../../components/pais-info/PaisInfo"
import { ChargingLoad } from "../../components/charging-load/ChargingLoad"
import { usePetition } from "../../hooks/usePetition"
import { ErrorBusqueda } from "../../components/error-busqueda/ErrorBusqueda"

export const PaisAux = () => {

const {dato} = useParams()
const {theme}  = useContext(ThemeContext)
const navigate = useNavigate()
let API_URL = import.meta.env.VITE_API_URL
const url = `${API_URL}/alpha/${dato}`
const {nameCountrie, error} = usePetition(dato, url)

const backHome = () => navigate(-1)


if(error){
  return <ErrorBusqueda error={error}/>
}


else if(!nameCountrie){
    return <ChargingLoad/>
}

  return (
    <>  
        <div className={`pais-container ${theme}`}>
            <PaisInfo backHome={backHome} nameCountrie={nameCountrie}/>
        </div>    
    </>
  )
}
