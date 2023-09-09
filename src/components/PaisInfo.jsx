/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import {Link} from 'react-router-dom'

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
                <div className="texto">
                     <div>
                        <h1>{nameCountrie.name.common}</h1>

                        {
                           nameCountrie.name.nativeName ? (Object.entries(nameCountrie.name.nativeName).map(([a, b],index) => {

                                     { return index==0 ? (<><h1 key={b.official}>Native Name: </h1> <h2>{ b.official}</h2></>): ''}    
                            })) 
                            
                                : (<><h1>Native Name:</h1> <h2>no hay data disponible</h2> </>)

                        }

                        
                        <h2>Population:{nameCountrie.population}</h2>

                        <h2>Region: {nameCountrie.region}</h2>
                        {
                           nameCountrie.subregion ?  (<h2>Sub Region: {nameCountrie.subregion}</h2>): (<><h1>sub Region: </h1> <h2>{vacio}</h2></>)
                        }
                        {
                            nameCountrie.capital ? (<h2>Capital: {nameCountrie.capital}</h2>): (<><h1>Capital: </h1> <h2>{vacio}</h2></>)
                        }
                     </div>
                    
                     <div>
                            <h2>TLD: {nameCountrie.tld}</h2>
                            {
                                nameCountrie.currencies ? (
                                    Object.entries(nameCountrie.currencies).map(([a, b]) => {
                                        return <h2 key={b.name}>Currencies: {b.name}</h2>
                                    })
                                ):
                                (
                                    <>
                                        <h1>Currencies: </h1>
                                        <h2>{vacio}</h2>
                                    </>
                                )
                            } 
                            <h1>Languages:</h1>
                            {
                                nameCountrie.languages ? (
                                   Object.values(nameCountrie.languages).map(ele =>(
                                    <h2>{ele}</h2>
                                   ))
                                ):(
                                    <>
                                        <h2>{vacio}</h2>
                                    </>
                                )
                            }
                    </div>   
                </div>    
               <div className="enlaces"> 
                    <h1>Border Countries: </h1>
                   {
                    nameCountrie.borders ? (
                           
                           nameCountrie.borders.map(ele => (
                                    <Link to={`/pais/${ele}`} key={ele}>{ele}</Link>
                                    
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
