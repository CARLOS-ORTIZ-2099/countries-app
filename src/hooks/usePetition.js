/* eslint-disable react-hooks/exhaustive-deps */

import { useState } from "react"
import { useEffect } from "react"

export const usePetition = (name, url) => {
    const [nameCountrie, setNameCountrie] = useState('')  

    useEffect(() => {
        namePetition(url)
    }, [name])
    
    async function namePetition(url) {
        try {
            let response = await fetch(url)
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

    return {nameCountrie}

}
