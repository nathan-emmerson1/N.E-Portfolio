import AboutMe from './Aboutme'
import Contact from './Contact'
import Footer from './Footer'
import Nav from './Nav'
import Home from './Home'
import ProjectList from './Projects'

function App() {
  console.log('on the app ')
  return (
    <div className="bg-glass min-h-screen">
      <Nav />
      <Home />
      <AboutMe />
      <ProjectList />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
