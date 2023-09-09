/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import './pais.css'
import ThemeContext from "../context/ThemeContext"
import { ChargingLoad } from "./ChargingLoad"
import { PaisInfo } from "./PaisInfo"

export const Pais = () => {
    
const [nameCountrie, setNameCountrie] = useState('')    
const {name} = useParams()
const {theme}  = useContext(ThemeContext)
let API_URL = import.meta.env.VITE_API_URL
const navigate = useNavigate()

useEffect(() => {
    namePetition(API_URL)
}, [name])

async function namePetition(api) {
    try {
        let response = await fetch(`${api}/name/${name}?fullText=true`)
        if(response.ok!== true){
            throw 'data inexistente'
        }
        let [data] = await response.json()
        console.log(data)
        setNameCountrie(data)
    }
    catch(error) {
        console.log(error)
    }
}

const backHome = () => {
    navigate('/')
}

if(!nameCountrie){
    return <ChargingLoad/>
}

  return (
        <div className={`pais-container ${theme}`}>
            <PaisInfo backHome={backHome} nameCountrie={nameCountrie}/>
        </div>  
  )
}
