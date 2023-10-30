import { GrillaPaises } from './pages/grilla-paises/GrillaPaises'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Header } from "./components/header/Header"
import { Error } from "./pages/Error"
import { ThemeProvider } from "./context/ThemeContext"
import { Pais } from './pages/pais/Pais'
import { PaisAux } from './pages/pais-aux/PaisAux'



function App() {
  

  return (
    <>
   <ThemeProvider> 
      <Header/>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<GrillaPaises/>}/>
            <Route path="/:name" element={<Pais/>}/>
           
            <Route path="/pais/:dato" element={<PaisAux/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>  
    </>
  )
}

export default App
