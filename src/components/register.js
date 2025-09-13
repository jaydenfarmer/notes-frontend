import React from "react";

function Register() {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="card p-4 shadow">
        <h2>Create an Account</h2>
        <p>Already have an account? Log in</p>
        <form>
          <div className="row g-3 align-items-center justify-content-center mb-3">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
              />
            </div>
          </div>
          <div className="row g-3 align-items-center justify-content-center mb-3">
            <div className="col">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="row g-3 align-items-center justify-content-center mb-3">
            <div className="col">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
          </div>
          <button className="btn btn-dark" type="submit">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
