import { Link } from "react-router-dom"

function Nav() {
  return (
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
            <li><a href="https://github.com/nathan-emmerson1">Github</a></li>
            <li>
              <a>Socials</a>
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
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">N.E</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="https://github.com/nathan-emmerson1">Github</a></li>
          <li>
            <details>
              <summary>Socials</summary>
              <ul className="p-2">
                <li>
                  <a href="https://www.linkedin.com/in/nathan-emmerson-1b4705316/">Linkden</a>
                </li>
                <li>
                  <a>Instagram</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
           <a href="#about">About me</a> 
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a href="https://docs.google.com/document/d/1OdidF1w5_x5p0GXXpuUZODnCsUGHw1kWz0BT8q4kNHA/edit?usp=sharing" className="btn">CV</a>
      </div>
    </div>
  )
}
export default Nav
