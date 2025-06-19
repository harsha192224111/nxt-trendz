import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
      alt="not found"
      className="not-found-img"
    />
    <h1 className="not-found-heading">Page Not Found</h1>
    <p className="not-found-text">
      The page you are looking for might have been removed, had its name
      changed, or is temporarily unavailable.
    </p>
    <Link to="/" className="go-home-link">
      Go to Home
    </Link>
  </div>
)

export default NotFound
