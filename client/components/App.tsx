
import AboutMe from "./Aboutme"
import Contact from "./Contact"
import Footer from "./Footer"
import Nav from "./Nav"
import ProjectList from "./Projects"

function App() {
  console.log('on the app ')
  return (
    <div className="bg-gray-100">
    <Nav />
    <AboutMe />
    <ProjectList />
    <Contact />
    <Footer />
    
    </div>


  )
}

  


export default App
