import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import api from '../../services/api';
import Loading from '../../componetns/Loading';
import {isAuthenticated} from '../../services/auth';

export default class Add extends Component {

  state = {
    message: "",
    loading: true
  }


  componentDidMount(){
    document.title = "Gleyson Abreu - Add Users";
    this.setState({loading: false});
  }
  
  send = async (event) => {
    event.preventDefault();
    
    let divError = document.querySelector(".text-error");
    let company = document.querySelector("input[name=company]").value;
    let name = document.querySelector('input[name=name]').value;
    let lastname = document.querySelector('input[name=lastname]').value;
    let email = document.querySelector('input[name=email]').value;
    let password = document.querySelector('input[name=password]').value;
    let add_submit = document.querySelector("input[name=add_submit]");
    add_submit.value = "Sending...";
    add_submit.disabled = 'disabled';
    if(company === '' || name === '' || lastname === '' || password === '' || email === ''){
      divError.style.display = "block";
      this.setState({message: "Fill in all fields."});
      add_submit.value = "Send";
      add_submit.disabled = null;
    }else if(isAuthenticated() === true){
      var data = new FormData();
      data.set("name", name);
      data.set("lastname", lastname);
      data.set("company", company);
      data.set("email", email);
      data.set("password", password);
      divError.style.display = "block";
      this.setState({ message: "Creating user..." });
      const response = await api({
        method: "post",
        url: "/add/user/Gla123",
        data: data,
        headers: {'Content-Type': 'multipart/form-data'}
      });

      const { message } = response.data;
      this.setState({ message });
      add_submit.value = "Send";
      add_submit.disabled = null;
    }else{
      divError.style.display = "block";
      this.setState({ message: "Unauthenticated user!" });
      add_submit.value = "Send";
      add_submit.disabled = null;
    }
  }

  mainContent = () => {

    return (
      <div className="add-user">
      <form onSubmit={this.send} method="post" encType="multipart/form-data">
        <ul>
        <div className="text-error">
          {this.state.message}
        </div>
          <li><input type="text" name="name" placeholder="Enter your first name" /></li>
          <li><input type="text" name="lastname" placeholder="Enter your last name" /></li>
          <li><input type="text" name="company" placeholder="Enter your companny" /></li>
          <li><input type="text" name="email" placeholder="Enter your e-mail" /></li>
          <li><input type="password" name="password" placeholder="Enter your password" /></li>
          <div className="actions">
          <input type="submit" name="add_submit" value="send" />
          <Link to={`/`}>Back</Link>
          </div>
        </ul>
      </form>
    </div>
    )
    
  }

  render(){

    return this.state.loading ? <Loading /> : <this.mainContent />;

  };

}
