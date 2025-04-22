import { Routes, Route } from 'react-router-dom'
import Homepage from './assets/Components/Homepage'
import Internship from './assets/Components/Internship'
function App() {
 

  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* <Route path="/internships" element={<Internship />} /> */}
      </Routes>
    {/* <Homepage/> */}
    </>
  )
}

export default App
