import { Link } from 'react-router-dom'
import './notFound.css'

function NotFound() {
  return (
    <section>
      <div className="container notFound_container">
        <h1>page not found</h1>
        <Link to='/' className='btn'> go back to home page</Link>
      </div>
    </section>
  )
}

export default NotFound
