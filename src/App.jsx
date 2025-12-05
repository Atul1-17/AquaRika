import Header from "./components/sheared/Header"
import Footer from "./components/sheared/Footer"
import { Outlet } from "react-router"

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App