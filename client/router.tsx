/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import AboutMe from './components/Aboutme'

import ProjectList from './components/Projects'
import NeibourGood from './components/NeibourGoods'
import ConstABull from './components/constabull'
import CarGarage from './components/Cargarage'

const router = createBrowserRouter(
  createRoutesFromElements([
    
    <Route index element={<App />} />,
    <Route path='/about' element={<AboutMe />} />,
    
    <Route path='/projects' element={<ProjectList />} />,
    <Route path='/neighbourgoods' element={<NeibourGood />} />,
    <Route path='/constabull' element={<ConstABull />} />,
    <Route path='/cargarage' element={<CarGarage />} />,
    
    
  
  ])
)

export default router