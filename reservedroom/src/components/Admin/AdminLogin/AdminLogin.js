import React from "react";
import Axios from "axios";
import "../Admin.css";
import Header from "../../Header/Header";

export default class AdminLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errors: [],
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event)
    const data = {
      username: this.state.username,
      password: this.state.password,
    };
    if (this.isFormvalid()) {
      console.log("working");
      this.setState({ errors: [] });
      console.log("going to see axios");

      Axios.post("/admin/login", data)
        .then((response) => {
          console.log(response.data);
          if (response.data === "Username not found") {
            alert("Username not found");
            window.location = "/admin";
          } else if (response.data === "Incorrect Password") {
            alert("Password Incorrect");
            window.location = "/admin";
          } else {
            alert("Login Successful");
            localStorage.setItem("userToken", response.data);
            window.location = "/admin/dashboard";
          }
        })
        .catch((err) => {
          console.log(err);
        });

      console.log(data);
    }
  };

  isFormvalid = () => {
    let error;
    let errorsArray = this.state.errors;
    if (this.isFormempty(this.state)) {
      error = { message: "Fill in all the fields" };
      errorsArray.push(error);
      console.log(error);
      this.setState({ errors: errorsArray });
      errorsArray = [];
    } else {
      this.setState({ errors: [] });
      return true;
    }
  };

  isFormempty = ({ username, password }) => {
    console.log("you are in isFormempty");

    if (!username.length || !password.length) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    return (
      <div>
        <div>
          <Header/>
        </div>
      <div className="login-card">
        <h1>
          <b>ADMIN LOGIN</b>
        </h1>
        <br />
        <form style={{ color: "black" }}>
          Login
          <input
            type="text"
            name="username"
            placeholder="User Name"
            value={this.state.username}
            onChange={(e) => this.handleChange(e)}
          />
          Password
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={(e) => this.handleChange(e)}
          />
          <div className="login-help">
            <a href="/" style={{ color: "blue" }}>
              Back
            </a>
          </div>
          <button
            className="btn text-white fw-bold w-25 my-3"
            style={{ backgroundColor: "#000" }}
            onClick={this.handleSubmit}
          >
            Login
          </button>
        </form>
      </div>
      </div>
    );
  }
}
