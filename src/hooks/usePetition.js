/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react"
import { useEffect } from "react"

export const usePetition = (name, url) => {
    const [nameCountrie, setNameCountrie] = useState('')  
    const [error, setError] = useState(null)

    useEffect(() => {
        namePetition(url)
    }, [name])
    
    async function namePetition(url) {
        try {
            let response = await fetch(url)
            if(response.ok!== true){
                let error = new Error('data inexistente')
                error.stattus = response.status || '000'
                error.statusText = response.statusText || 'error en la consulta'
                throw error
            }
            let [data] = await response.json()
            console.log(data)
            setNameCountrie(data)
        }
        catch(error) {
            console.log(error)
            setError(error)
        }
    }

    return {nameCountrie, error}

}
