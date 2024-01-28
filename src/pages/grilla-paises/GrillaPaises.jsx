/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react"
import './grilla-paises.css'
import ThemeContext from "../../context/ThemeContext"
import { SearchFilter } from "../../components/search-filter/SearchFilter"
import { ChargingLoad } from "../../components/charging-load/ChargingLoad"
import { LinkCountry } from "../../components/link-country/LinkCountry"

export const GrillaPaises = () => {
  

const {theme}  = useContext(ThemeContext)
const [countries, setCountries] = useState([])
const [error, setError] = useState(null)
let API_URL = import.meta.env.VITE_API_URL

useEffect(() => {
    petitionApi()
}, [])
 
async function petitionApi() {
    try{
        let response = await fetch(`${API_URL}/all`)
        if(response.ok!== true){
            throw 'no hay data disponible'
        }
        let data = await response.json()
         console.log(data)
         setError(null)
         setCountries(data)
         
    }
    catch(error) {
        console.log(error)
    }
   
}

async function search(name) {
  try {
    if (/[#&/?+.;\\]/.test(name)) {
      throw "caracteres no permitidos";
    }
    let response = await fetch(`${API_URL}/name/${name}`)
    let data = await response.json()
    console.log(data)
    if(data.status >=400){
      const {message} = data
      throw `${message}`
    }
    setCountries(data)
    setError(null)
  }
  catch(error){
        console.log('mensaje de error:'+ ' '+ error)
        setError('mensaje de error:'+ ' '+ error)
  }
}

const searchCountries = (e) => {
    let target = e.target.value
    console.log(target)
    if(target.length===0){
        petitionApi()
        console.log('entro')
    }else{    
     search(target.toLowerCase())
    }
}

async function region(continente) {
    let response = await fetch(`${API_URL}/region/${continente}`)
    let data = await response.json()
    console.log(data)
    setCountries(data)
}

const select = (e) => {
    let option = e.target.value
    console.log(option)
    if(option !== 'filtrado') {
        region(option.toLowerCase())
    }
}

if(countries.length < 1){
    return <ChargingLoad/>
}

  return (
    <div className={`${theme}`}>
      <SearchFilter searchCountries = {searchCountries} select = {select}/>
      <div className={`container ${theme}`}>
      <LinkCountry error={error} countries={countries} />
     </div>   
    </div>
  )
}
