import { BrowserRouter } from "react-router-dom"
import Router from "./router/Router"
import Lyout from "./Lyout/Lyout"


function App() {

  return (
   <BrowserRouter>
   <Lyout>
   <Router/>
   </Lyout>
   </BrowserRouter>
  )
}

export default App
