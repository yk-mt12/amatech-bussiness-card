import { Footer } from './components/Footer'
import { Interest } from './components/Interest'
import { About } from './components/About'
import { Info } from './components/Info'
import './App.css'

const App = () => {

  return (
    <>
      <main className="main">
        <section className="main__section">
          <Info />
          <About />
          <Interest />
          <Footer />
        </section>
      </main>
    </>
  )
}

export default App
