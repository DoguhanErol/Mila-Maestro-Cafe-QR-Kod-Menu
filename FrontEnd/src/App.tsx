import './App.css'
import ProductsPage from './pages/ProductsPage'
import MenuPage from './pages/MenuPage'
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
      <Route path='/menu' element={<MenuPage />} />
      <Route path='/menu/:menuNameID' element={<ProductsPage />} />
    </Routes>
    <footer className='fixed bottom-0'>
      <a className='block text-lg bg-gray-600 p-1 mt-5 sm:text-lg w-fit text-zinc-100 hover:text-zinc-100' href="https://www.doguhanerol.dev/" target='blank'>Developer | Doğuhan Erol</a>
    </footer>
    </>
  )
}

export default App
