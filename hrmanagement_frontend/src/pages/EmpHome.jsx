
import { Link, useNavigate } from "react-router-dom";

function EmpHome() {
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
      {/* Welcome Section */}
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
                EMPLOYEE PORTAL
              </span>

              <h1 className="display-5 fw-bold">Welcome, Employee!</h1>

              <p className="lead mb-0">
                Stay organized, manage your assigned tasks, and keep track
                of your work progress.
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

      {/* Dashboard Cards */}
      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: "#203a43" }}>
            My Workspace
          </h2>

          <p className="text-secondary">
            Everything you need to stay on top of your work.
          </p>
        </div>

        <div className="row g-4">
          {/* Assigned Tasks */}
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
                  📋
                </div>

                <h4 className="fw-bold">My Tasks</h4>

                <p className="text-secondary">
                  View the tasks assigned to you by your HR manager.
                </p>

                <Link to="/my-tasks" className="btn btn-outline-dark">
                  View My Tasks →
                </Link>
              </div>
            </div>
          </div>

          {/* Deadlines */}
          <div className="col-md-6 col-lg-4">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body p-4">
                <div
                  className="d-flex align-items-center justify-content-center rounded-3 mb-3"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#fff0d9",
                    fontSize: "28px",
                  }}
                >
                  📅
                </div>

                <h4 className="fw-bold">Task Deadlines</h4>

                <p className="text-secondary">
                  Keep track of due dates and plan your work on time.
                </p>

                <Link to="/my-tasks" className="btn btn-outline-dark">
                  Check Deadlines →
                </Link>
              </div>
            </div>
          </div>

          {/* Progress */}
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
                  📈
                </div>

                <h4 className="fw-bold">My Progress</h4>

                <p className="text-secondary">
                  Review your work and update task status when needed.
                </p>

                <Link to="/my-tasks" className="btn btn-outline-dark">
                  Track Progress →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Helpful Information */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="bg-white shadow-sm rounded-4 p-4 p-md-5">
              <h3 className="fw-bold" style={{ color: "#203a43" }}>
                Stay Focused. Get Things Done.
              </h3>

              <p className="text-secondary mb-0">
                Check your assigned tasks regularly, complete your work before
                the deadline, and keep your task status updated so your HR
                manager can monitor progress.
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

export default EmpHome;
