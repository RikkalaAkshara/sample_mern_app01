
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  let [name, setName] = useState("");
  let [emailid, setEmailid] = useState("");
  let [password, setPassword] = useState("");
  let [Role, setRole] = useState("");
  let [message, setMessage] = useState("");
  let [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  let handleRegister = async (event) => {
    event.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      let res = await fetch("http://localhost:3000/api/emp/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          emailid,
          password,
          role: Role,
        }),
      });

      let data = await res.json();

      if (res.ok) {
        setMessage("Registration successful! You can now log in.");
        console.log("Data inserted successfully", data);

        setName("");
        setEmailid("");
        setPassword("");
        setRole("");
      } else {
        setMessage(data.message || "Registration failed. Please try again.");
        console.log(data);
      }
    } catch (error) {
      console.error("Registration error:", error);
      setMessage("Unable to connect to the server. Check whether your backend is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center py-5 px-3"
      style={{
        minHeight: "85vh",
        background: "linear-gradient(135deg, #eaf2f8, #f5eef8)",
      }}
    >
      <div
        className="row g-0 bg-white rounded-4 overflow-hidden shadow-lg"
        style={{ maxWidth: "1000px", width: "100%" }}
      >
        {/* Left Side */}
        <div
          className="col-md-5 d-flex flex-column justify-content-center p-5 text-white"
          style={{
            background: "linear-gradient(145deg, #203a43, #2c5364)",
          }}
        >
          <h1 className="fw-bold mb-3">Join Our Team</h1>
          <p className="fs-5">
            Create your account and experience smarter workplace management.
          </p>

          <div className="mt-4">
            <p>✓ Easy employee registration</p>
            <p>✓ Efficient task management</p>
            <p>✓ A connected workplace</p>
          </div>
        </div>

        {/* Registration Form */}
        <div className="col-md-7 p-4 p-md-5">
          <h2 className="fw-bold mb-2" style={{ color: "#203a43" }}>
            Create Account
          </h2>
          <p className="text-secondary mb-4">
            Enter your details to register.
          </p>

          {message && (
            <div
              className={`alert ${
                message.startsWith("Registration successful")
                  ? "alert-success"
                  : "alert-danger"
              }`}
              role="alert"
            >
              {message}
            </div>
          )}

          <form onSubmit={handleRegister}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Full Name</label>
              <input
                type="text"
                className="form-control form-control-lg"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Email Address</label>
              <input
                type="email"
                className="form-control form-control-lg"
                value={emailid}
                onChange={(event) => setEmailid(event.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Password</label>
              <input
                type="password"
                className="form-control form-control-lg"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Create a password"
                minLength={6}
                required
              />
              <small className="text-secondary">
                Use at least 6 characters.
              </small>
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">Select Your Role</label>
              <select
                className="form-select form-select-lg"
                value={Role}
                onChange={(event) => setRole(event.target.value)}
                required
              >
                <option value="">Choose your role</option>
                <option value="HR">HR</option>
                <option value="EMPLOYEE">Employee</option>
              </select>
            </div>

            <button
              type="submit"
              className="btn btn-lg text-white w-100 fw-semibold"
              style={{ backgroundColor: "#203a43" }}
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Register"}
            </button>
          </form>

          <p className="text-center mt-4 mb-0">
            Already have an account?{" "}
            <Link
              to="/Login"
              className="fw-semibold text-decoration-none"
              style={{ color: "#2c5364" }}
            >
              Login
            </Link>
          </p>

          <div className="text-center mt-3">
            <Link to="/" className="text-secondary text-decoration-none">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
