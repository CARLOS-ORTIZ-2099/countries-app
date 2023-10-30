/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import {Link} from 'react-router-dom'
import { DatosPais } from '../pais-info-template/DatosPais'

export const PaisInfo = ({nameCountrie, backHome}) => {

 const vacio = 'no hay data disponible'

  return (
    <>
            <div className="child1">
                <div>
                    <button onClick={backHome}>Back</button>
                </div>
                <img src={nameCountrie.flags.png} alt="" />
            </div>
             
            <div className="child2">
                <DatosPais nameCountrie={nameCountrie}/>
          

               <div className="enlaces"> 
                    <h1>Border Countries: </h1>
                   {
                    nameCountrie.borders ? (
                           
                           nameCountrie.borders.map(ele => (
                                    <Link key={ele} to={`/pais/${ele}`} >{ele}</Link>
                                    
                            ))
                                      
                    ):
                    (
                        <>
                            <h2> {vacio}</h2>
                        </>
                    )
                   }
               </div>    
            </div>
    </>
  )
}
