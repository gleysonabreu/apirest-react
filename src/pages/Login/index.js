import React, { Component } from 'react';
import './styles.css';
import { Link, Redirect } from 'react-router-dom';
import api from '../../services/api';
import {login} from '../../services/auth';

export default class Login extends Component {

  state = {
    message: ""
  }

  componentDidMount(){
    document.title = "Gleyson Abreu - Login";
  }

  login = async (event) => {
    event.preventDefault();
    let data = new FormData();
    let email = document.querySelector("input[name=email]").value;
    let pass = document.querySelector("input[name=password]").value;
    let divError = document.querySelector(".text-error");
    let login_submit = document.querySelector("input[name=login_submit]");
    login_submit.value = "Logging in...";
    login_submit.disabled = 'disabled';

    if(email != null && pass != null){
      this.setState({message: "Logging in.."})
      divError.style.display = "block";
      data.set("email", email);
      data.set("password", pass);
      let response = await api({
        method: "POST",
        url: "/auth/login",
        data: data,
        headers: {'Content-Type': 'multipart/form-data'}
      });
      if(response.data.jwt){
        login(response.data.jwt);
      }
      this.setState({message: response.data.message});
      login_submit.value = "Login";
      login_submit.disabled = null;
    }

  }

  render(){
  return (

    <div className="wrapper">
      
      <div className="global">
        <h1>Login</h1>
        <div className="outlet">
            <div className="add-user">
          <form onSubmit={this.login} method="post" encType="multipart/form-data">
            <ul>
              <div className="text-error">
                {this.state.message}
              </div>
              <li><input type="text" name="email" placeholder="Email" /></li>
              <li><input type="password" name="password" placeholder="Password" /></li>
              <div className="actions">
              <input type="submit" name="login_submit" value="Login" />
              <Link to={`/`}>Back</Link>
              </div>
            </ul>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
  }
}