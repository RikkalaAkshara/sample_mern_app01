
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [message, setMessage] = useState("");
  let [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  let handleLogin = async (event) => {
    event.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      // HR/Admin Login
      if (email === "admin@gmail.com" && password === "admin") {
        navigate("/adminhome");
        return;
      }

      // Employee Login
      let req = await fetch("http://localhost:3000/api/emp/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      let res = await req.json();

      if (req.ok) {
        console.log(res);

        // Update this condition if your backend uses a different response format.
        if (res.user?.Role === "HR" || res.user?.Role === "hr") {
          navigate("/adminhome");
        } else {
          navigate("/employeehome");
        }
      } else {
        setMessage(res.message || "Invalid email or password.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Unable to connect to the server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center py-5 px-3"
      style={{
        minHeight: "85vh",
        background: "linear-gradient(135deg, #eaf2f8, #f5eef8)",
      }}
    >
      <div
        className="row g-0 bg-white rounded-4 overflow-hidden shadow-lg"
        style={{ maxWidth: "950px", width: "100%" }}
      >
        {/* Left Side */}
        <div
          className="col-md-5 text-white d-flex flex-column justify-content-center p-5"
          style={{
            background: "linear-gradient(145deg, #203a43, #2c5364)",
          }}
        >
          <h1 className="fw-bold mb-3">Welcome Back!</h1>
          <p className="fs-5">
            Your workplace, tasks, and team — all in one place.
          </p>

          <div className="mt-4">
            <p>✓ Secure portal access</p>
            <p>✓ Employee management</p>
            <p>✓ Smart task tracking</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="col-md-7 p-4 p-md-5">
          <h2 className="fw-bold mb-2" style={{ color: "#203a43" }}>
            Sign In
          </h2>
          <p className="text-secondary mb-4">
            Enter your account details to continue.
          </p>

          {message && (
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label fw-semibold">
                Email Address
              </label>
              <input
                type="email"
                className="form-control form-control-lg"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">
                Password
              </label>
              <input
                type="password"
                className="form-control form-control-lg"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-lg text-white w-100 fw-semibold"
              style={{ backgroundColor: "#203a43" }}
              disabled={loading}
            >
              {loading ? "Signing in..." : "Login"}
            </button>
          </form>

          <p className="text-center mt-4 mb-0">
            Don't have an account?{" "}
            <Link
              to="/Register"
              className="fw-semibold text-decoration-none"
              style={{ color: "#2c5364" }}
            >
              Register
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

export default Login;
