import AuthLayout from "@components/layouts/auth/AuthLayout"
import MainLayout from "@components/layouts/main/MainLayout"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


function App() {

  const user = false

  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      return navigate("/login");
    }
  }, [navigate, user])


  return (
    <>
      {
        user ? <MainLayout /> : <AuthLayout />
      }
    </>
  )

}

export default App
