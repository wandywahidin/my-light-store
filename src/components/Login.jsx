import React from "react";
import { Link } from "react-router-dom";
import gambar from "../image/shop.jpg";

const Login = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-8">
          <img
            src={gambar}
            alt=""
            style={{ maxWidth: "100vw", maxHeight: "100vh" }}
          />
        </div>
        <div className="col-sm-4 mx-auto">
          <h4 className="text-center my-5 fw-bold text-primary">Login</h4>
          <div className="container mx-auto">
            <form className="mx-auto d-flex flex-column">
              <label htmlFor="email">
                <h6 className="mx-auto">Email</h6>
                <input
                  type="email"
                  id="email"
                  placeholder="Masukan Email"
                  className=""
                />
              </label>
              <label htmlFor="password" className="mt-3">
                <h6 className="">Password</h6>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className=""
                />
              </label>
            </form>
            <div className="forget mt-1">
              <Link
                to="/reset-password"
                className="fw-lighter text-decoration-none fst-italic"
                style={{ fontSize: "12px" }}
              >
                Lupa password?
              </Link>
            </div>
            <div className="buttons my-2">
              <button
                type="submit"
                className="btn btn-primary fw-bold"
              >
                Login
              </button>
            </div>
            <div className="mt-2">
              <p className="text-primary" style={{fontSize:"12px"}}>
                Belum punya akun? klik 
                <span>
                  <Link
                    to="/register"
                    className="fw-lighter text-decoration-none fst-italic mx-1"
                    style={{ fontSize: "12px" }}
                  >
                    Daftar
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
