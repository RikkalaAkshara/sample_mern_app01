
import { Link } from "react-router-dom";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.avif";
import img3 from "../assets/img3.jpg";

function Home() {
  return (
    <div style={{ backgroundColor: "#f8fafc", minHeight: "70vh" }}>

      {/* Welcome section */}
      <section
        className="text-white text-center py-5 px-3"
        style={{
          background: "linear-gradient(110deg, #111827, #312e81, #4f46e5)"
        }}
      >
        <div className="container py-3">
          <span
            className="badge rounded-pill px-3 py-2 mb-3"
            style={{
              backgroundColor: "rgba(255,255,255,0.15)",
              color: "#c7d2fe"
            }}
          >
            HR MANAGEMENT SYSTEM
          </span>

          <h1 className="display-5 fw-bold mb-3">
            Welcome to Your <span style={{ color: "#a5b4fc" }}>
              Workplace
            </span>
          </h1>

          <p className="lead mx-auto mb-4" style={{ maxWidth: "650px" }}>
            One platform for employees and HR to manage tasks,
            streamline workflows, and stay connected.
          </p>

          <div className="d-flex justify-content-center flex-wrap gap-3">
            <Link
              to="/Login"
              className="btn btn-light btn-lg fw-semibold px-4"
              style={{ color: "#3730a3", borderRadius: "10px" }}
            >
              Login to Portal →
            </Link>

            <Link
              to="/Register"
              className="btn btn-outline-light btn-lg px-4"
              style={{ borderRadius: "10px" }}
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>

      {/* Portal options */}
      <section className="container py-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold" style={{ color: "#312e81" }}>
            Your Workplace, Simplified
          </h2>
          <p className="text-secondary">
            Choose your role and access your workspace.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-6">
            <div className="card border-0 shadow-sm rounded-4 h-100 p-4">
              <div
                className="rounded-3 d-flex align-items-center justify-content-center mb-3"
                style={{
                  width: "60px",
                  height: "60px",
                  backgroundColor: "#eef2ff",
                  fontSize: "30px"
                }}
              >
                👨‍💻
              </div>

              <h3 className="h4 fw-bold" style={{ color: "#312e81" }}>
                Employee Portal
              </h3>

              <p className="text-secondary" style={{ lineHeight: "1.8" }}>
                Access your account, view assigned tasks, track task
                status, and stay updated on your work.
              </p>

              <div className="mt-auto">
                <Link
                  to="/Login"
                  className="btn btn-primary px-4"
                  style={{ backgroundColor: "#4338ca", border: "none" }}
                >
                  Employee Login →
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card border-0 shadow-sm rounded-4 h-100 p-4">
              <div
                className="rounded-3 d-flex align-items-center justify-content-center mb-3"
                style={{
                  width: "60px",
                  height: "60px",
                  backgroundColor: "#f3e8ff",
                  fontSize: "30px"
                }}
              >
                👩‍💼
              </div>

              <h3 className="h4 fw-bold" style={{ color: "#312e81" }}>
                HR Portal
              </h3>

              <p className="text-secondary" style={{ lineHeight: "1.8" }}>
                Manage employee accounts, assign tasks, monitor progress,
                and organize workplace activities.
              </p>

              <div className="mt-auto">
                <Link
                  to="/Login"
                  className="btn btn-primary px-4"
                  style={{ backgroundColor: "#4338ca", border: "none" }}
                >
                  HR Login →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workplace carousel */}
      <section className="container pb-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h2 className="fw-bold mb-1" style={{ color: "#312e81" }}>
              A Better Way to Work
            </h2>
            <p className="text-secondary mb-0">
              Bringing employees and HR together.
            </p>
          </div>

          <div className="d-flex gap-2">
            <button
              className="btn rounded-circle text-white"
              style={{ backgroundColor: "#4338ca", width: "42px", height: "42px" }}
              type="button"
              data-bs-target="#carouselStacked"
              data-bs-slide="prev"
              aria-label="Previous slide"
            >
              &#8592;
            </button>

            <button
              className="btn rounded-circle text-white"
              style={{ backgroundColor: "#4338ca", width: "42px", height: "42px" }}
              type="button"
              data-bs-target="#carouselStacked"
              data-bs-slide="next"
              aria-label="Next slide"
            >
              &#8594;
            </button>
          </div>
        </div>

        <div
          id="carouselStacked"
          className="carousel slide shadow rounded-4"
          data-bs-ride="carousel"
          data-bs-interval="4000"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselStacked"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselStacked"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselStacked"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner rounded-4">
            <div className="carousel-item active">
              <img
                src={img1}
                className="d-block w-100"
                alt="Workplace collaboration"
                style={{
                  height: "clamp(250px, 40vw, 420px)",
                  objectFit: "cover"
                }}
              />
              <div
                className="carousel-caption text-start rounded-3 p-3"
                style={{ backgroundColor: "rgba(17,24,39,0.65)" }}
              >
                <h3 className="fw-bold">Work Together</h3>
                <p className="mb-0">
                  Build stronger connections across your team.
                </p>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src={img2}
                className="d-block w-100"
                alt="Workplace productivity"
                style={{
                  height: "clamp(250px, 40vw, 420px)",
                  objectFit: "cover"
                }}
              />
              <div
                className="carousel-caption text-start rounded-3 p-3"
                style={{ backgroundColor: "rgba(17,24,39,0.65)" }}
              >
                <h3 className="fw-bold">Stay Productive</h3>
                <p className="mb-0">
                  Keep tasks organized and track progress efficiently.
                </p>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src={img3}
                className="d-block w-100"
                alt="Teamwork and professional growth"
                style={{
                  height: "clamp(250px, 40vw, 420px)",
                  objectFit: "cover"
                }}
              />
              <div
                className="carousel-caption text-start rounded-3 p-3"
                style={{ backgroundColor: "rgba(17,24,39,0.65)" }}
              >
                <h3 className="fw-bold">Grow Together</h3>
                <p className="mb-0">
                  Create a more connected and organized workplace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
