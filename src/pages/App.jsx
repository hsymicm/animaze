import '@/assets/styles/Style.css'
import NavBar from '@/components/Layout'
import Router from '@/routes/Router'
import Footer from '@/components/Footer'

export default function App() {
  return (
    <>
      <NavBar />
      <Router />
      <Footer />
    </>
  )
}