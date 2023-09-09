import { GrillaPaises } from "./components/GrillaPaises"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Pais } from "./components/Pais"
import { PaisAux } from "./components/PaisAux"
import { Header } from "./components/Header"
import { Error } from "./pages/Error"
import { ThemeProvider } from "./context/ThemeContext"


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
