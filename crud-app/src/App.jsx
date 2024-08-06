import react from 'react'
import ContextProvider from './components/ContextProvider'
import MyRoutes from './components/MyRoutes'

function App() {
  return (
    <ContextProvider>
      <MyRoutes />
    </ContextProvider>
  )
}

export default App
