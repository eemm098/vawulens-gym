import './footer.css'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo.png'
import { FaLinkedinIn } from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'


const Footer = () => {
  return (
      <footer className='footer'>
          <div className="container footer_container">
              <article>
                  
                  <Link to='/' className='logo'>
                      <img src={Logo} alt=" footer logo" />
                  </Link>
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas quasi impedit fugiat officia quod necessitatibus quo eius quae perspiciatis rerum?
                  </p>
                  <div className="footer_socials">
                      <a href="https://linkedin.com/" target='_blank' rel='noreferrer noopener'><FaLinkedinIn/></a>
                      <a href="https://facebook.com/" target='_blank' rel='noreferrer noopener'><FaFacebookF/></a>
                      <a href="https://twitter.com/" target='_blank' rel='noreferrer noopener'><AiOutlineTwitter/></a>
                      <a href="https://instgram.com/" target='_blank' rel='noreferrer noopener'><AiFillInstagram/></a>
                  </div>
              </article>
              <article>
                  <h4>permaLink</h4>
                <Link to='/about'>about</Link>
                <Link to='/contact'>contact</Link>
                <Link to='/trainers'>trainers</Link>
                <Link to='/gallery'>gallery</Link>
                <Link to='/plans'>plans</Link>
                 
                  
              </article>
              <article>
                  <h4>insight</h4>
                  <Link to='/s'>blog</Link>
                  <Link to='/s'>case studies</Link>
                  <Link to='/s'>events</Link>
                  <Link to='/s'>communities</Link>
                  <Link to='/s'>FAQs</Link>

              </article>
              <article>
                  <h4>get in touch</h4>
                  <Link to='/contact'>contact us</Link>
                  <Link to='/s'>support</Link>
              </article>
          </div>
          <div className="footer_copyRight">
              <small>2023 eman habib &copy; all rights reversed</small>
          </div>
    </footer>
  )
}

export default Footer
