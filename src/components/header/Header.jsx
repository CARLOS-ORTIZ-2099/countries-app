import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMoon, faSun} from '@fortawesome/free-regular-svg-icons'
import { useContext } from 'react'
import './header.css'
import ThemeContext from '../../context/ThemeContext'

export const Header = () => {



const {state, change, theme}  = useContext(ThemeContext)


  return (
    <div className={`header-container ${theme}`} >
       <span> Where in the world?</span>
        <span>
           {
            !state ? (<div> <FontAwesomeIcon className='icon moon' onClick={change} icon={faMoon} fade />
                <div> Dark Mode</div> </div>)
                :(
                    <div >
                        <FontAwesomeIcon className='icon sun' onClick={change} icon={faSun} fade style={{color:'yellow'}}/>
                        <div>Light Mode</div>
                    </div>
                )
            
           }
        </span>
    </div>
  )
}

