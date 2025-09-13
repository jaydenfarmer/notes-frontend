import React, { useState } from "react";

function Login() {
  const [identifier, setIdentifier] = useState("");

  const handleChange = (e) => {
    setIdentifier(e.target.value);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="card p-4 shadow">
        <h2 className="mb-3">Login</h2>
        <form>
          <div className="row g-3 align-items-center justify-content-center mb-3">
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Email or Username"
                name="identifier"
                value={identifier}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row g-3 align-items-center justify-content-center mb-3">
            <div className="col-auto">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
          </div>
          <button className="btn btn-dark mb-3" type="submit">
            Login
          </button>
        </form>
        <p>Don't have an account? Sign up</p>
      </div>
    </div>
  );
}

export default Login;
