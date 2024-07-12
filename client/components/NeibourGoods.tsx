import { Link } from 'react-router-dom'
import Nav from './Nav'

function NeibourGood() {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="#about">About me</a>
              </li>
              <li>
                <a href="https://github.com/nathan-emmerson1">Github</a>
              </li>
              <li>
                <button>Socials</button>
                <ul className="p-2">
                  <li>
                    <a href="https://www.linkedin.com/in/nathan-emmerson-1b4705316/">
                      Linkden
                    </a>
                  </li>
                  <li>
                    <a>Instagram</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={'#about'}>
                  {' '}
                  <div>Projects</div>{' '}
                </Link>
              </li>
            </ul>
          </div>
          <Link to={'/'} ><div className="btn btn-ghost text-3xl">N.E</div> </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
             <Link to={'/projects'}> <div className='text-xl'>
                Projects
              </div>
              </Link>
            </li>
            <li>
              <a href="#contact" className="text-xl">
                Contact
              </a>
            </li>
            <li>
              <a href="https://github.com/nathan-emmerson1" className="text-xl">
                Github
              </a>
            </li>
            <li>
              <details>
                <summary className="text-xl">Socials</summary>
                <ul className="p-2">
                  <li>
                    <a href="https://www.linkedin.com/in/nathan-emmerson-1b4705316/">
                      Linkden
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/NTEmmerson">Twitter</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
             <Link to={'/aboutme'}> <div  className="text-xl">
                About me
              </div> </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://drive.google.com/file/d/1Ptl9qfTkRXy_fNJqonuBd2UHMH2WwJlC/view?usp=sharing"
            className="btn"
          >
            Resume
          </a>
        </div>
      </div>
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    </div>
  )
}
export default NeibourGood
