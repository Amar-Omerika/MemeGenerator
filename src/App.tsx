import { SelectedImagesProvider } from './context/SelectedImagesContext'
import Home from './pages/Home'

function App() {
  return (
    <SelectedImagesProvider>
      <div className="h-screen overflow-x-hidden bg-primary">
        <Home />
      </div>
    </SelectedImagesProvider>
  )
}

export default App
