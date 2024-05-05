import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate, Link } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import register from "../../assets/images/NewRegister.avif";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SignUPComponent.css";

const SignUpComponent = () => {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    axios({
      method: "post",
      url: "https://shopper-web-server.vercel.app/register",
      data: values,
    })
      .then(() => {
        toast.success("Register Successfully");
        setTimeout(() => {
          navigate("/login");
        }, 4000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {" "}
      <ToastContainer />
      <div id="RegisterBack">
        <div>
          <Formik
            initialValues={{
              first: "",
              last: "",
              email: "",
              password: "",
            }}
            validationSchema={yup.object({
              first: yup.string().required("Enter First Name"),
              last: yup.string().required("Enter Last Name"),
              email: yup
                .string()
                .required("Enter Email Address")
                .email("Invalid Email address"),
              password: yup
                .string()
                .required("Create Password")
                .matches(
                  /(?=.*[A-Z])\w{4,15}/,
                  "Password 4 to 15 with one uppercase"
                ),
            })}
            onSubmit={handleSubmit}
          >
            {(props) => (
              <Form>
                <div id="form-register">
                  <div className="frm-data">
                    <h5>Sign up | Shopper</h5>
                    <hr />
                    <div className="Register-data">
                      <div>
                        <label htmlFor="">First Name</label>
                        <div>
                          <Field
                            type="text"
                            name="first"
                            id="input"
                            style={{
                              border: "1px solid white",
                              outline: "none",
                              background: "transparent",
                              width: "100%",
                              height: "35px",
                            }}
                          ></Field>
                        </div>
                        <span className="text-danger">
                          <ErrorMessage name="first" />
                        </span>
                      </div>

                      <div>
                        <label htmlFor="">Last Name</label>
                        <div>
                          <Field
                            type="text"
                            name="last"
                            id="input"
                            style={{
                              border: "1px solid white",
                              outline: "none",
                              background: "transparent",
                              width: "100%",
                              height: "35px",
                            }}
                          ></Field>
                        </div>
                        <span className="text-danger">
                          <ErrorMessage name="last" />
                        </span>
                      </div>

                      <div>
                        <label htmlFor="">Email</label>
                        <div>
                          <Field
                            type="email"
                            name="email"
                            id="input"
                            style={{
                              border: "1px solid white",
                              outline: "none",
                              background: "transparent",
                              width: "100%",
                              height: "35px",
                            }}
                          ></Field>
                        </div>
                        <span className="text-danger">
                          <ErrorMessage name="email" />
                        </span>
                      </div>

                      <div>
                        <label htmlFor="">Password</label>
                        <div>
                          <Field
                            type="password"
                            name="password"
                            id="input"
                            style={{
                              border: "1px solid white",
                              outline: "none",
                              background: "transparent",
                              width: "100%",
                              height: "35px",
                            }}
                          ></Field>
                        </div>
                        <span className="text-danger">
                          <ErrorMessage name="password" />
                        </span>
                      </div>

                      <div>
                        <button
                          disabled={!props.isValid}
                          className="btn btn-primary w-100"
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  </div>
                  <div id="register-img">
                    <img src={register} alt="register" />
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignUpComponent;
