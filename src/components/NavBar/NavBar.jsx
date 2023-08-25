import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import Logo from '../../images/logo.png'
import { links } from '../../data'
import { GoThreeBars } from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'
import './navBar.css'


const NavBar = () => {
  const [isNavShow,setISNavShow] = useState(false)
  return (
      <nav >
          <div className="container nav_container">
        <Link to='/' className='logo' >
          <img src={Logo} alt=" nav logo" />
        </Link>
        <ul className={`nav_links  ${isNavShow ? 'show-nav' : 'hide-nav'}`}>
          {
            links.map(({ name, path } , index) => {
              return (
                <li key={index}>
                  <NavLink onClick={() => setISNavShow(prev => !prev)} className={({isActive}) => isActive ? 'active-nav' : ''} to={path}>{name}</NavLink>
                </li>
              )
            })
          }
        </ul>
        <button title='menu' onClick={() => setISNavShow(prev => !prev)} className="nav_toggle_btn" >
          {
            isNavShow ?  <MdOutlineClose/> : <GoThreeBars/>
          }
        </button>
          </div>
      
    </nav>
  )
}

export default NavBar
