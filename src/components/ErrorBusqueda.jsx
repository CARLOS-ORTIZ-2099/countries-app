/* eslint-disable react/prop-types */

import './errorBusqueda.css'
import logoError from '../images/loaders/error-page-svgrepo-com.svg'

export const ErrorBusqueda = ({error}) => {
 



  return (
    <div className="continer">
        <h1 className="title-error">Error De Busqueda</h1>
        <h2 className="prop-error">{error}</h2>
        <hr/>
        <img style={{width:'70%' , marginTop:'2rem',}} src={logoError} alt="" />
        
    </div>
  )
}
