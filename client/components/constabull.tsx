import { Link } from 'react-router-dom'

function ConstABull() {
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
            <img src="./images/constbulllogo.jpg" alt="neiobourgoodlogo"></img>
          </div>

          <h1 className="mb-5 text-5xl font-bold">Group Project</h1>
          <p className="mb-5  text-">
            During our first group project, we had only 24 hours to deliver a
            product. We decided to build an app where users could view and
            review all the great walks of New Zealand. The tech stack we used
            included TypeScript and React.js. As our first project, it was a
            valuable experience collaborating with my team, utilizing effective
            stand-up drills, and managing our time well. Taking on my first role
            as the "vibe watcher" was a great learning opportunity for me.
          </p>
          <a href="https://github.com/nathan-emmerson1/const-aBull">
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
export default ConstABull
