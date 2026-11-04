
import { Link } from "react-router-dom";

function HrHome() {
  return (
    <div
      style={{
        minHeight: "85vh",
        background: "linear-gradient(135deg, #eef4f8, #f5eef8)",
      }}
    >
      {/* Welcome Section */}
      <section
        className="text-white py-5"
        style={{
          background: "linear-gradient(135deg, #203a43, #2c5364)",
        }}
      >
        <div className="container py-4">
          <span className="badge bg-light text-dark mb-3 px-3 py-2">
            HR DASHBOARD
          </span>

          <h1 className="display-5 fw-bold">Welcome, HR!</h1>

          <p className="lead mb-4">
            Manage your employees, assign tasks, and keep your workplace
            organized — all in one place.
          </p>

          <Link to="/" className="btn btn-light fw-semibold px-4">
            Back to Home
          </Link>
        </div>
      </section>

      {/* Dashboard Cards */}
      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: "#203a43" }}>
            Your Workspace
          </h2>
          <p className="text-secondary">
            Choose an option to manage your team efficiently.
          </p>
        </div>

        <div className="row g-4">
          {/* Employee Management */}
          <div className="col-md-6 col-lg-4">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body p-4">
                <div
                  className="rounded-3 d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#e2edf3",
                    fontSize: "28px",
                  }}
                >
                  👥
                </div>

                <h4 className="fw-bold">Employee Management</h4>
                <p className="text-secondary">
                  View and manage employee information in one place.
                </p>

                <Link
                  to="/employees"
                  className="btn btn-outline-dark mt-2"
                >
                  Manage Employees →
                </Link>
              </div>
            </div>
          </div>

          {/* Task Assignment */}
          <div className="col-md-6 col-lg-4">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body p-4">
                <div
                  className="rounded-3 d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#e9e3f7",
                    fontSize: "28px",
                  }}
                >
                  📋
                </div>

                <h4 className="fw-bold">Task Assignment</h4>
                <p className="text-secondary">
                  Create tasks, set deadlines, and assign work to employees.
                </p>

                <Link
                  to="/assign-task"
                  className="btn btn-outline-dark mt-2"
                >
                  Assign a Task →
                </Link>
              </div>
            </div>
          </div>

          {/* Task Tracking */}
          <div className="col-md-6 col-lg-4">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body p-4">
                <div
                  className="rounded-3 d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#e0f2e9",
                    fontSize: "28px",
                  }}
                >
                  📊
                </div>

                <h4 className="fw-bold">Task Tracking</h4>
                <p className="text-secondary">
                  Monitor assigned tasks and check their current status.
                </p>

                <Link
                  to="/tasks"
                  className="btn btn-outline-dark mt-2"
                >
                  View Tasks →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Information Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="bg-white rounded-4 shadow-sm p-4 p-md-5">
              <h3 className="fw-bold" style={{ color: "#203a43" }}>
                Manage Your Team with Confidence
              </h3>

              <p className="text-secondary mb-0">
                Use your HR dashboard to organize employee details, distribute
                responsibilities, and track progress. Keep your team connected
                and help daily work run smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HrHome;
