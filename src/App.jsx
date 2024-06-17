import { BrowserRouter } from "react-router-dom"
import Router from "./router/Router"
import Lyout from "./Lyout/Lyout"
import ProcuctsProvidev from "./context/ProcuctsProvidev"

function App() {

  return (
   <BrowserRouter>
   <ProcuctsProvidev>
   <Lyout>
   <Router/>
   </Lyout>
   </ProcuctsProvidev>
   </BrowserRouter>
  )
}

export default App
