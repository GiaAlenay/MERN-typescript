import { Link } from 'react-router-dom'
export const NavBar=()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className='container'>
                
                    <Link className="navbar-brand" to="/">
                    My Favourite Videos
                    </Link>
                    <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarColor03"
                            aria-controls="navbarColor03"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            >
                            <span className="navbar-toggler-icon" deluminate_imagetype="unknown" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav m-auto">       
                        <li className="nav-item">
                        <Link className="nav-link" to="/new-video">
                            Add new video
                        </Link>
                        </li>       
                    </ul>
                    
                    </div>
                
            </div>
        </nav>
    )
}