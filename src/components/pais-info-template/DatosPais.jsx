/* eslint-disable react/prop-types */


export const DatosPais = ({nameCountrie}) => {
    const vacio = 'no hay data disponible'

  return (

        <div className="texto">
            <div>
                    <h1>{nameCountrie.name.common}</h1>

                    {
                        nameCountrie.name.nativeName ? (Object.entries(nameCountrie.name.nativeName).map(([a, b],index) => {

                                { return index==0 ? <span key={index}><h1 key={b.official}>Native Name: </h1> <h2>{ b.official}</h2></span>
                                    : ''
                                }    
                        })
                        ) 
                        
                        : (<span ><h1>Native Name:</h1> <h2>no hay data disponible</h2> </span>)

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
                                Object.values(nameCountrie.languages).map((ele, index) =>(
                                <h2 key={index}>{ele}</h2>
                                ))
                            )
                            :(
                                <>
                                    <h2>{vacio}</h2>
                                </>
                            )
                        }
            </div>   
        </div>    


  )

}
