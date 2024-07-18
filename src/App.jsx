import { Route, Routes } from 'react-router-dom'
import './App.css'
import Admin from './routes/admin/Admin'
import TodayMenu from './redux/today-menu/TodaysMenu'
import Menu from './routes/menu/Menu'
function App() {


  return (
    <Routes>
      <Route path="/admin" element={<Admin />}>
        <Route path='today-menu' element={<TodayMenu />} />
        <Route path='menu' element={<Menu />} />
      </Route>

    </Routes>
  )
}

export default App
