import Foote from "./Foote"
import Header from "./Header"

function Lyout({children}) {
  return (
    <>
    <Header/>
    <div className="min-w-full">{children}</div>
    <Foote />
    </>
  )
}

export default Lyout