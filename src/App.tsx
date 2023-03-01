import { BrowserRouter, Routes, Route } from 'react-router-dom'
import List from './pages/list/index'
import ShoppingCart from './pages/shoppingCart/index'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/cart' element={<ShoppingCart/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
