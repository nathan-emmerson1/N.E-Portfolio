/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import AboutMe from './components/Aboutme'
import Contact from './components/Contact'
import ProjectList from './components/Projects'

const router = createBrowserRouter(
  createRoutesFromElements([
    
    <Route index element={<App />} />,
    <Route path='/about' element={<AboutMe />} />,
    <Route path='/contact' element={<Contact />} />,
    <Route path='/projects' element={<ProjectList />} />
  
  ])
)

export default router