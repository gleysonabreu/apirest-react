import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import api from '../../services/api';

export default class Add extends Component {

  state = {
    message: ""
  }
  
  send = async (event) => {
    event.preventDefault();
    document.querySelector(".text-error").style.display = "block";

    let company = document.querySelector("input[name=company]").value;
    let name = document.querySelector('input[name=name]').value;
    let lastname = document.querySelector('input[name=lastname]').value;
    if(company === '' || name === '' || lastname === ''){
        this.setState({message: "Fill in all fields."});
    }else{
      var data = new FormData();
      data.set("name", name);
      data.set("lastname", lastname);
      data.set("company", company);

      this.setState({ message: "Creating user..." });
      const response = await api({
        method: "post",
        url: "/add/user/Gla123",
        data: data,
        headers: {'Content-Type': 'multipart/form-data'}
      });

      const { message } = response.data;
      this.setState({ message });
    }
  }

  render(){
  return (
    <div className="add-user">
      <form onSubmit={this.send} method="post" encType="multipart/form-data">
        <ul>
        <div className="text-error">
          {this.state.message}
        </div>
          <li><input type="text" name="name" placeholder="Digite um nome" /></li>
          <li><input type="text" name="lastname" placeholder="Digite um sobrenome" /></li>
          <li><input type="text" name="company" placeholder="Digite sua empresa" /></li>
          <div className="actions">
          <input type="submit" name="submit" value="send" />
          <Link to={`/`}>Back</Link>
          </div>
        </ul>
      </form>
    </div>
  )};

}
