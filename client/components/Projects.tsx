import { Link } from "react-router-dom"

function ProjectList() {
  return (
    <div className="hero min-h-screen" id="projects">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="./images/project-logowithoutbackground.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
          alt="projectbackground"
        />
        <div>
          <h1 className="text-6xl font-bold">Projects</h1>
          <p className="text-5xl"></p>
          <br></br>
          <button className="btn btn-primary">Get Started</button>
          <br></br>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 pt-8">
            <Link to={'/neigbourgoods'}> <a href="https://neighbour-goods.vercel.app/">
              {' '}
              <div className="h-32  rounded-lg bg-blue-300 content-center">
                <img
                  src="./images/neibourgoodslogo.png"
                  alt="neibourgoodlogo"
                 
                ></img> 
              </div>{' '}
            </a> </Link>
            <div className="h-15 rounded-lg bg-yellow-300 content-center">
              <img
                src="./images/otherpokemon.png"
                alt="pokenmonlogo"
                className="w-45"
              ></img>
            </div>

            <a href="https://github.com/nathan-emmerson1/const-aBull"><div className="h-32 rounded-lg bg-gray-200 link link-hover bottom-auto">
              
              <img
                src="./images/constbulllogo.jpg"
                alt="constabull logo"
                className="link-hover"
              ></img>
            </div> </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectList
