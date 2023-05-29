import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Menu(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        {/* <Link className="navbar-brand" to="/">
          My App
        </Link> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Catalogo
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/novo">
                Novo
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sobre">
                Sobre
              </Link>
            </li>
          </ul>
        </div>  
      </nav>
    )
}
