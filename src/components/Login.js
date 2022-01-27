import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allentry, setallentry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const newentry = { email: email, password: password };

    setallentry([...allentry, newentry]);
  };

  return (
    <div className="container">
      <div className="col-md-4 my-5 offset-md-4">
        <h2>Login</h2>
        <form action="" onSubmit={submitForm}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <div>
          {allentry.map((element) => {
            return (
              <div classname="d-flex">
                <p>{element.email}</p>
                <p>{element.password}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Login;
