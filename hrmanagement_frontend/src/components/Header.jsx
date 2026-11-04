
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        {/* Brand name */}
        <Link className="navbar-brand brand-logo" to="/">
          <span className="brand-icon">✦</span> MyWebsite
        </Link>

        {/* Mobile toggle button */}
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation links */}
        <div
          className="collapse navbar-collapse"
          id="navbarContent"
        >
          <div className="navbar-nav ms-auto align-items-lg-center nav-links">
            <Link className="nav-link" to="/">
              Home
            </Link>

            <Link className="nav-link" to="/about">
              About Us
            </Link>

            <Link className="nav-link" to="/contact">
              Contact Us
            </Link>

            <Link className="nav-link login-link" to="/Login">
              Login
            </Link>

            <Link className="btn register-btn" to="/Register">
              Register <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
