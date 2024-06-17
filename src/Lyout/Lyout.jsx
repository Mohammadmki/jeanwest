import Foote from "./Foote"
import Header from "./Header"

function Lyout({children}) {
  return (
    <>
    <Header/>
    <div className="min-h-[100vh]">{children}</div>
    <Foote />
    </>
  )
}

export default Lyout