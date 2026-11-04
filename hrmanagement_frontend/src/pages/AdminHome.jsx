
import { Link, useNavigate } from "react-router-dom";

function AdminHome() {
  let navigate = useNavigate();

  let handleLogout = () => {
    navigate("/Login");
  };

  return (
    <div
      style={{
        minHeight: "85vh",
        background: "linear-gradient(135deg, #eef4f8, #f5eef8)",
      }}
    >
      {/* Header Section */}
      <section
        className="text-white py-5"
        style={{
          background: "linear-gradient(135deg, #203a43, #2c5364)",
        }}
      >
        <div className="container py-4">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
            <div>
              <span className="badge bg-light text-dark mb-3 px-3 py-2">
                ADMIN PORTAL
              </span>

              <h1 className="display-5 fw-bold">Welcome, HR Admin!</h1>

              <p className="lead mb-0">
                Manage employees, assign tasks, and monitor your team's
                progress.
              </p>
            </div>

            <button
              className="btn btn-outline-light px-4"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="container py-5">
        <div className="mb-4">
          <h2 className="fw-bold" style={{ color: "#203a43" }}>
            Admin Dashboard
          </h2>
          <p className="text-secondary">
            Everything you need to manage your workplace in one place.
          </p>
        </div>

        <div className="row g-4">
          {/* Employee Management */}
          <div className="col-md-6 col-lg-4">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body p-4">
                <div
                  className="d-flex align-items-center justify-content-center rounded-3 mb-3"
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
                  View and manage employee details and team information.
                </p>

                <Link to="/employees" className="btn btn-outline-dark">
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
                  className="d-flex align-items-center justify-content-center rounded-3 mb-3"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#e9e3f7",
                    fontSize: "28px",
                  }}
                >
                  📋
                </div>

                <h4 className="fw-bold">Assign Tasks</h4>
                <p className="text-secondary">
                  Create tasks, set deadlines, and assign work to employees.
                </p>

                <Link to="/assign-task" className="btn btn-outline-dark">
                  Assign Task →
                </Link>
              </div>
            </div>
          </div>

          {/* Task Tracking */}
          <div className="col-md-6 col-lg-4">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body p-4">
                <div
                  className="d-flex align-items-center justify-content-center rounded-3 mb-3"
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
                  View task progress and monitor employee task status.
                </p>

                <Link to="/tasks" className="btn btn-outline-dark">
                  View Tasks →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Information */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="bg-white shadow-sm rounded-4 p-4 p-md-5">
              <h3 className="fw-bold" style={{ color: "#203a43" }}>
                Your Team. Your Workspace.
              </h3>

              <p className="text-secondary mb-0">
                Keep employee information organized, distribute tasks
                efficiently, and track work progress through your HR
                Management System.
              </p>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-4">
          <Link to="/" className="text-secondary text-decoration-none">
            ← Back to Website Home
          </Link>
        </div>
      </section>
    </div>
  );
}

export default AdminHome;
