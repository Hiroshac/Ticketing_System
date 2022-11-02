import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "../logo.png";

export const Registation = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [contactno, setContactno] = useState("");
  const [address, setAddress] = useState("");
  const [nic, setNic] = useState("");
  const [password, setPassword] = useState("");
  const [rpassword, setRpassword] = useState("");

  const navi = useNavigate();
  const [data, setData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      fullname: fullname,
      email: email,
      contactno: contactno,
      address: address,
      type: "local",
      nic: nic,
      password: password,
    };

    console.log(data);

    if (
      data.fullname == "" ||
      data.email == "" ||
      data.contactno == "" ||
      data.address == "" ||
      data.nic == "" ||
      data.password == ""
    ) {
      Swal.fire({
        icon: "warning",
        title: "Warning",
        text: "Please fill all the details!!!",
      });
    } else {
      if (password !== rpassword) {
        Swal.fire({
          icon: "warning",
          title: "oops...",
          text: "Password Mismatch!!!",
        });
      } else {
        await axios
          .post("http://localhost:5000/auth/register", data)
          .then((res) => {
            console.log(res);
            if (res.data === "Created") {
              Swal.fire("Congrats!", "Successfully Registered", "success");
              navi("/");
            } else if (res.data === "Exists") {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "The User Already Exists !!!",
                showConfirmButton: false,
              });
              window.location.reload();
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

  return (
    <div>
      <div className="Container" style={{width:"70%",marginLeft:"15%"}}>
        <section className="vh-100">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img
                  src={logo}
                  className="img-fluid"
                  alt="Sample image"
                />
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <h3 className="text-center p-3 mt-4">Register</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-outline mb-1">
                    <label className="form-label" for="form3Example3">
                      Full Name
                    </label>
                    <input
                      type="fullname"
                      id="fullname"
                      className="form-control form-control-lg"
                      placeholder="full name"
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-outline mb-1">
                    <label className="form-label" for="form3Example3">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-control form-control-lg"
                      placeholder="Enter a valid email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-outline mb-1">
                    <label className="form-label" for="form3Example3">
                      Contact No
                    </label>
                    <input
                      type="contactno"
                      id="contactno"
                      className="form-control form-control-lg"
                      placeholder="contact no"
                      value={contactno}
                      onChange={(e) => setContactno(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-outline mb-1">
                    <label className="form-label" for="form3Example3">
                      Address
                    </label>
                    <input
                      type="address"
                      id="address"
                      className="form-control form-control-lg"
                      placeholder="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-outline mb-1">
                    <label className="form-label" for="form3Example3">
                      NIC
                    </label>
                    <input
                      type="nic"
                      id="nic"
                      className="form-control form-control-lg"
                      placeholder="NIC"
                      value={nic}
                      onChange={(e) => setNic(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-outline mb-1">
                    <label className="form-label" for="form3Example4">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      // pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
                      title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                      className="form-control form-control-lg"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-outline mb-3">
                    <label className="form-label" for="form3Example4">
                      Re-enter Password
                    </label>
                    <input
                      type="password"
                      id="rpassword"
                      className="form-control form-control-lg"
                      placeholder="Re-enter password"
                      value={rpassword}
                      onChange={(e) => setRpassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check mb-0">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg"
                        // onClick={handleSubmit}
                      >
                        Register
                      </button>
                    </div>
                    <p className="small fw-bold mb-0">
                      Have an account?{" "}
                      <Link to="/login" className="link-danger">
                        Login
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
