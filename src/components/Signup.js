import React, { useState } from "react";

const Signup = () => {
  // State Registration fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  // State Submit , Error
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handle fields
  const handlename = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
  const handleemail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
  const handlephone = (e) => {
    setPhone(e.target.value);
    setSubmitted(false);
  };
  const handlepassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // handle form subbmission
  const handlesubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || phone === "" || password === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  const successMessage = () => {
    return (
      <div className="sucess" style={{ display: submitted ? "" : "none" }}>
        <h5>{name} successfully registered !</h5>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="error" style={{ display: error ? "" : "none" }}>
        <h5>Please enter all the fields</h5>
      </div>
    );
  };

  return (
    <>
      <div className="container">
        <div className="col-md-4 my-5 offset-md-4">
          <h2>Registration</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="name"
                className="form-control"
                id="name"
                value={name}
                onChange={handlename}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={handleemail}
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                value={phone}
                onChange={handlephone}
                required
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
                id="password"
                onChange={handlepassword}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handlesubmit}
            >
              Submit
            </button>
          </form>
          <div className="messages">
            {errorMessage()}
            {successMessage()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
