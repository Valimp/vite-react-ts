import { Routes, Route } from 'react-router-dom'
import PageLayout from './components/layouts/PageLayout'
import Homepage from './pages/HomePage'

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path='/vite-react-ts/' element={<Homepage/>} />
      </Routes>
    </PageLayout>
  )
}

export default App
