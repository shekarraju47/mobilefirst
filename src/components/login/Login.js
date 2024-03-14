import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const location = useNavigate();

  const userCredentioals = {
    username: "shekar",
    password: "Shekar@123",
  };

  const submit = (e) => {
    e.preventDefault();
    if (
      userCredentioals.username === username &&
      userCredentioals.password === password
    ) {
      localStorage.setItem("userDetails", userCredentioals);
      location("/");
    } else {
      setError(true);
    }
  };

  const token = localStorage.getItem("userDetails");
  if (token) {
    return <Navigate to={"/"} />;
  }

  return (
    <div>
      <section className="vh-100">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col col-xl-10">
              <div className="card m-2">
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form onSubmit={submit}>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3"></i>
                          <span className="h1 fw-bold mb-0">
                            Login to Jokes
                          </span>
                        </div>

                        <marquee className="text-success" direction="left">
                          *Username : shekar *Password : Shekar@123
                        </marquee>
                        <h5 className="fw-bold mb-3 pb-3 text-primary">
                          Sign into your account
                        </h5>

                        <div className="form-outline mb-4">
                          <input
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                            id="form2Example17"
                            className="form-control form-control-lg"
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example17"
                          >
                            User Name
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            id="form2Example27"
                            className="form-control form-control-lg"
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example27"
                          >
                            Password
                          </label>
                        </div>

                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="submit"
                          >
                            Login
                          </button>
                          {error && (
                            <p className="text-danger pt-2">
                              * User Name (or) Password Not Correct
                            </p>
                          )}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
