import React from 'react'
import './Head.css'
import { NavLink } from 'react-router-dom'

const Head = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="computer-screen">
            <div className="com-head">
              <div className="logo">
                <h2>Srz Esports.Org</h2>
              </div>
              <div className="com-navbar">
                <li>
                  <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={'/about'}>About</NavLink>
                </li>
                <li>
                  <NavLink to={'/Teams'}>Teams</NavLink>
                </li>
                <li>
                  <NavLink to={'/Players'}>Players</NavLink>
                </li>
                <li>
                  <NavLink to={'/'}>Streamers</NavLink>
                </li>

              </div>
            </div>
          </div>


          {/* Mobile - Screen */}

          <div className="mob-nav">
            <div className="sub-mob-nav">
              <div className="mob-header">
                <div className="mob-logo">
                  <h5 className='fa-2x'>Srz.Esports.Org</h5>
                </div>

                <div className="mob-handbuger">
                  <i class=" fa-solid fa-bars fa-2x" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"></i>
                </div>
              </div>


              <div class="offcanvas offcanvas-end" tabindex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                  <h5 id="offcanvasRightLabel " className='canvas-head fa-2x'>Srz.Esports.Org</h5>
                  <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body canvas-body">

                  <li>
                    <NavLink to={'/'}>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to={'/about'}>About</NavLink>
                  </li>
                  <li>
                    <NavLink to={'/Teams'}>Teams</NavLink>
                  </li>
                  <li>
                    <NavLink to={'/Players'}>Players</NavLink>
                  </li>
                  <li>
                    <NavLink>Streamers</NavLink>
                  </li>
                </div>
              </div>
            </div>
          </div>
          {/* Tap screen */}

          {/* 
          <div className="Tap-nav">
            <div className="sub-Tap-nav">
              <div className="Tap-header">
                <div className="Tap-logo">
                  <h5 className='fa-2x'>Srz.Esports.Org</h5>
                </div>

                <div className="mob-handbuger">
                  <i class=" fa-solid fa-bars fa-2x" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"></i>
                </div>
              </div>


              <div class="offcanvas offcanvas-end" tabindex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                  <h5 id="offcanvasRightLabel " className='canvas-head fa-2x'>Srz.Esports.Org</h5>
                  <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body Tap-canvas-body">

                  <li>
                    <NavLink to={'/'}></NavLink>
                  </li>
                  <li>
                    <NavLink>About</NavLink>
                  </li>
                  <li>
                    <NavLink>Teams</NavLink>
                  </li>
                  <li>
                    <NavLink>Players</NavLink>
                  </li>
                  <li>
                    <NavLink>Streamers</NavLink>
                  </li>
                </div>
              </div>
            </div>
          </div>

 */}

        </div>
      </div>
    </div>

  )
}

export default Head