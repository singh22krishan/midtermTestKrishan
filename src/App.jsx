import { useState } from 'react'
import MidtermForm from './components/MidtermForm/MidtermForm';
import Footer from './components/Footer/Footer';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <div className="app-container">
          <h1>Midterm Test Form</h1>
          <MidtermForm />
           <Footer />
           </div>
      </div>
  
    </>
  )
}

export default App
