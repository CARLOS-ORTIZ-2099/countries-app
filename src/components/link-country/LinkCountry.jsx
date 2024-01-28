/* eslint-disable react/prop-types */
import {Link} from 'react-router-dom'
import { ErrorBusqueda } from '../error-busqueda/ErrorBusqueda'


export const LinkCountry = ({error, countries}) => {

  return (
    <>

        {   
            error ?(<ErrorBusqueda error = {error}/>):

            (countries.map(countrie => (
              <Link className="card" to={`/${countrie.name.common}`} key={countrie.name.common}>  
                  <figure>
                    <img src={countrie.flags.png} alt="" />
                  </figure>
                  <div className="contenido">
                      <h1>{countrie.name.common}</h1>
                      <h2>Population: {countrie.population}</h2>
                      <h3>Region:  {countrie.region}</h3>
                      <h3>Capital: {countrie.capital}</h3>
                  </div>
              </Link>
            )))
        }

    </>
  )
}
