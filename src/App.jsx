import { BrowserRouter } from "react-router-dom"
import Router from "./router/Router"

import ProcuctsProvidev from "./context/ProcuctsProvidev"
import Layout from "./Layout/Layout"

function App() {

  return (
   <BrowserRouter>
   <ProcuctsProvidev>
   <Layout>
   <Router/>
   </Layout>
   </ProcuctsProvidev>
   </BrowserRouter>
  )
}

export default App
