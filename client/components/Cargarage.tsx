import { Link } from 'react-router-dom'

function CarGarage() {
  return (
    <div
      className="hero min-h-screen bg-blue-400"
      style={{
        backgroundImage:
          'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)',
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <div className="content-center">
            <img src={"./images/cargarage.jpg"} alt="neiobourgoodlogo"></img>
          </div>

          <h1 className="mb-5 text-5xl font-bold">Personal Project</h1>
          <p className="mb-5  text-">
            For a personal project, I created an app where mechanics can keep
            track of vehicle records, jobs, and parts. My goal was to cover the
            main learning objectives from Dev Academy, so I decided to build
            this project. The primary focus was setting up the server side and
            routing and ensuring everything rendered correctly on the front end.
            The tech stack I used includes SQL, React.js, Knex.js, and APIs.
            While I believe there is room for improvement in the CSS, the
            technical side could be enhanced by incorporating useMutation to
            enable users to update jobs and parts in their inventory.
          </p>
          <a href="https://github.com/nathan-emmerson1/Car-Garage-">
            <button className="btn btn-primary">Github</button>{' '}
          </a>
          
          <Link to={'/#projects'}>
            <button className="btn btn-primary">Home</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default CarGarage
