/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import ThemeContext from "../context/ThemeContext"
import { PaisInfo } from "./PaisInfo"
import { ChargingLoad } from "./ChargingLoad"

export const PaisAux = () => {
const [nameCountrie, setNameCountrie] = useState('')
const {dato} = useParams()
const {theme}  = useContext(ThemeContext)
let API_URL = import.meta.env.VITE_API_URL
const navigate = useNavigate()

useEffect(() => {
    countryFrontier()
}, [dato])

async function countryFrontier() {
    try{
        let response = await fetch(`${API_URL}/alpha/${dato}`)
        if(response.ok!== true){
            throw 'data invalida'
        }
        let [data] = await response.json()
        console.log(data)
        setNameCountrie(data)
    }
    catch(error){
        console.log(error)
    }
}

const backHome = () => {
    navigate(-1)
}

if(!nameCountrie){
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
