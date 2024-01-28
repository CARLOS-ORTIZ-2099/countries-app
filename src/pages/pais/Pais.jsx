import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import './pais.css'
import ThemeContext from "../../context/ThemeContext"
import { ChargingLoad } from "../../components/charging-load/ChargingLoad"
import { PaisInfo } from "../../components/pais-info/PaisInfo"
import { usePetition } from "../../hooks/usePetition"


export const Pais = () => {
       
const {name} = useParams()
const {theme}  = useContext(ThemeContext)
const navigate = useNavigate()
let API_URL = import.meta.env.VITE_API_URL
const url = `${API_URL}/name/${name}?fullText=true`
const {nameCountrie} = usePetition(name, url)

const backHome = () => navigate('/')

if(!nameCountrie){
    return <ChargingLoad/>
}

  return (
        <div className={`pais-container ${theme}`}>
            <PaisInfo backHome={backHome} nameCountrie={nameCountrie}/>
        </div>  
  )
}
