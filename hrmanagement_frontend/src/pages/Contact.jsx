
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="text-white text-center py-5"
        style={{
          background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        }}
      >
        <div className="container py-4">
          <h1 className="fw-bold display-5">Contact Us</h1>
          <p className="lead mb-0">
            We're here to help with your HR Management System.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="container py-5">
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-5">
            <div
              className="h-100 p-4 rounded-4 text-white shadow"
              style={{
                background: "linear-gradient(135deg, #203a43, #2c5364)",
              }}
            >
              <h3 className="fw-bold mb-4">Get in Touch</h3>
              <p>
                Have questions about employee management, task assignments,
                or your HR portal? Contact our support team.
              </p>

              <hr className="border-light" />

              <p>
                <strong>Email</strong>
                <br />
                support@hrmanagement.com
              </p>

              <p>
                <strong>Phone</strong>
                <br />
                +91 98765 43210
              </p>

              <p>
                <strong>Working Hours</strong>
                <br />
                Monday – Friday, 9:00 AM – 5:00 PM
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm border h-100">
              <h3 className="fw-bold mb-2">Send Us a Message</h3>
              <p className="text-secondary mb-4">
                Fill in the details below and let us know how we can help.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you! Your message has been submitted.");
                }}
              >
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="What do you need help with?"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-lg text-white w-100 fw-semibold"
                  style={{ backgroundColor: "#203a43" }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <div className="text-center pb-5">
        <Link to="/" className="btn btn-outline-dark px-4">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Contact;
