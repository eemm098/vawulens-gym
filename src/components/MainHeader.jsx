import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../images/main_header.png'
function MainHeader() {
  return (
      <header className="main_header">
          <div className="container main_header_container">
              <div className="main_header_left">
                  <h4>#100DaysOfWorkOut</h4>
                  <h1>join the legends or the fitness world</h1>
                  <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci harum nisi architecto aliquid. Laborum, dignissimos.
                  </p>
                  <Link to='/plans' className='btn lg'>get started</Link>
              </div>
              <div className="main_header_right">
                  <div className="main_header_circle"></div>
                  <div className="image">
                      <img src={Image} alt="main header image" />
                  </div>
              </div>
          </div>
   </header>
  )
}

export default MainHeader
