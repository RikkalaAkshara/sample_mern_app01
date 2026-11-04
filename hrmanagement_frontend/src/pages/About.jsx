
import { Link } from "react-router-dom";

function About() {
  return (
    <div style={{ backgroundColor: "#f8fafc", minHeight: "70vh" }}>

      {/* Hero Section */}
      <section
        className="text-center text-white py-5 px-3"
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
            ABOUT OUR SYSTEM
          </span>

          <h1 className="display-5 fw-bold mb-3">
            Smarter <span style={{ color: "#a5b4fc" }}>Workplace</span>
            {" "}Management
          </h1>

          <p className="lead mx-auto mb-0" style={{ maxWidth: "700px" }}>
            A centralized platform designed to connect HR professionals
            and employees, simplify task management, and improve
            workplace productivity.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="container py-5">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <div
              className="p-5 rounded-4 text-center"
              style={{
                background: "linear-gradient(135deg, #eef2ff, #ddd6fe)"
              }}
            >
              <div style={{ fontSize: "65px" }}>🏢</div>

              <h2 className="fw-bold mt-3" style={{ color: "#312e81" }}>
                One Platform
              </h2>

              <p className="text-secondary mb-0">
                Better coordination. Organized workflows. Stronger teams.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <h2 className="fw-bold mb-3" style={{ color: "#312e81" }}>
              What Is Our HR Management System?
            </h2>

            <p className="text-secondary" style={{ lineHeight: "1.9" }}>
              Our HR Management System is a web-based application that
              provides separate access for Human Resources (HR) personnel
              and employees. It helps organize employee information and
              manage workplace tasks through a centralized platform.
            </p>

            <p className="text-secondary" style={{ lineHeight: "1.9" }}>
              HR users can manage employee accounts and assign tasks,
              while employees can log in to view their assigned work
              and monitor task status. The goal is to make daily
              workplace operations more organized and efficient.
            </p>

            <Link
              to="/Login"
              className="btn text-white px-4 py-2 mt-2"
              style={{
                backgroundColor: "#4338ca",
                borderRadius: "10px"
              }}
            >
              Access Portal →
            </Link>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-5" style={{ backgroundColor: "#eef2ff" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span
              className="small fw-bold text-uppercase"
              style={{ color: "#6366f1", letterSpacing: "2px" }}
            >
              WHAT WE OFFER
            </span>

            <h2 className="fw-bold mt-2" style={{ color: "#312e81" }}>
              Features of Our System
            </h2>

            <p className="text-secondary">
              Essential tools for everyday workplace management.
            </p>
          </div>

          <div className="row g-4">

            {/* Employee Management */}
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm rounded-4 p-3 h-100">
                <div className="card-body">
                  <div style={{ fontSize: "35px" }}>👥</div>

                  <h4 className="fw-bold mt-3" style={{ color: "#312e81" }}>
                    Employee Management
                  </h4>

                  <p className="text-secondary mb-0" style={{ lineHeight: "1.8" }}>
                    Maintain employee accounts and organize employee
                    information through the HR portal.
                  </p>
                </div>
              </div>
            </div>

            {/* Task Assignment */}
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm rounded-4 p-3 h-100">
                <div className="card-body">
                  <div style={{ fontSize: "35px" }}>📋</div>

                  <h4 className="fw-bold mt-3" style={{ color: "#312e81" }}>
                    Task Assignment
                  </h4>

                  <p className="text-secondary mb-0" style={{ lineHeight: "1.8" }}>
                    Enable HR to assign work to employees and organize
                    task descriptions, deadlines, and responsibilities.
                  </p>
                </div>
              </div>
            </div>

            {/* Task Tracking */}
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm rounded-4 p-3 h-100">
                <div className="card-body">
                  <div style={{ fontSize: "35px" }}>📊</div>

                  <h4 className="fw-bold mt-3" style={{ color: "#312e81" }}>
                    Task Tracking
                  </h4>

                  <p className="text-secondary mb-0" style={{ lineHeight: "1.8" }}>
                    Help employees view assigned tasks and check their
                    progress and current status.
                  </p>
                </div>
              </div>
            </div>

            {/* Secure Access */}
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm rounded-4 p-3 h-100">
                <div className="card-body">
                  <div style={{ fontSize: "35px" }}>🔐</div>

                  <h4 className="fw-bold mt-3" style={{ color: "#312e81" }}>
                    Role-Based Access
                  </h4>

                  <p className="text-secondary mb-0" style={{ lineHeight: "1.8" }}>
                    Provide separate HR and employee experiences based
                    on authenticated user roles.
                  </p>
                </div>
              </div>
            </div>

            {/* Centralized Information */}
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm rounded-4 p-3 h-100">
                <div className="card-body">
                  <div style={{ fontSize: "35px" }}>🗂️</div>

                  <h4 className="fw-bold mt-3" style={{ color: "#312e81" }}>
                    Centralized Information
                  </h4>

                  <p className="text-secondary mb-0" style={{ lineHeight: "1.8" }}>
                    Keep relevant employee and task information organized
                    in one application.
                  </p>
                </div>
              </div>
            </div>

            {/* Productivity */}
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm rounded-4 p-3 h-100">
                <div className="card-body">
                  <div style={{ fontSize: "35px" }}>⚡</div>

                  <h4 className="fw-bold mt-3" style={{ color: "#312e81" }}>
                    Better Productivity
                  </h4>

                  <p className="text-secondary mb-0" style={{ lineHeight: "1.8" }}>
                    Reduce manual coordination and make workplace
                    task management easier.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="container py-5">
        <div className="row g-4">

          <div className="col-md-6">
            <div
              className="h-100 p-4 rounded-4 shadow-sm"
              style={{ backgroundColor: "#ffffff" }}
            >
              <div style={{ fontSize: "35px" }}>🎯</div>

              <h3 className="fw-bold mt-3" style={{ color: "#312e81" }}>
                Our Mission
              </h3>

              <p className="text-secondary mb-0" style={{ lineHeight: "1.9" }}>
                To simplify employee and task management by providing
                an organized, user-friendly platform that supports
                communication, accountability, and productivity.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div
              className="h-100 p-4 rounded-4 shadow-sm"
              style={{ backgroundColor: "#ffffff" }}
            >
              <div style={{ fontSize: "35px" }}>🚀</div>

              <h3 className="fw-bold mt-3" style={{ color: "#312e81" }}>
                Our Vision
              </h3>

              <p className="text-secondary mb-0" style={{ lineHeight: "1.9" }}>
                To create a more connected and efficient workplace
                where HR teams and employees can collaborate effectively
                through technology.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section
        className="text-center text-white py-5 px-3"
        style={{
          background: "linear-gradient(110deg, #111827, #312e81, #4f46e5)"
        }}
      >
        <div className="container">
          <h2 className="fw-bold">Ready to Get Started?</h2>

          <p className="text-light mt-3 mb-4">
            Log in to access your employee or HR workspace.
          </p>

          <Link
            to="/Login"
            className="btn btn-light btn-lg fw-semibold px-4"
            style={{ color: "#3730a3", borderRadius: "10px" }}
          >
            Login to Your Portal →
          </Link>
        </div>
      </section>

    </div>
  );
}

export default About;
