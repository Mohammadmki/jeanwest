import Footer from "./Footer"
import Header from "./Header"

function Layout({children}) {
  return (
    <>
    <Header/>
    <div className="min-h-[100vh] w-full font-sans">{children}</div>
    <Footer />
    </>
  )
}

export default Layout