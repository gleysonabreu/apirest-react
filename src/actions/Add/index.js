import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import api from '../../services/api';
import Loading from '../../componetns/Loading';

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
    let add_submit = document.querySelector("input[name=add_submit]");
    add_submit.value = "Sending...";
    add_submit.disabled = 'disabled';
    if(company === '' || name === '' || lastname === ''){
      divError.style.display = "block";
      this.setState({message: "Fill in all fields."});
      add_submit.value = "Send";
      add_submit.disabled = null;
    }else{
      var data = new FormData();
      data.set("name", name);
      data.set("lastname", lastname);
      data.set("company", company);
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
          <li><input type="text" name="name" placeholder="Digite um nome" /></li>
          <li><input type="text" name="lastname" placeholder="Digite um sobrenome" /></li>
          <li><input type="text" name="company" placeholder="Digite sua empresa" /></li>
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
