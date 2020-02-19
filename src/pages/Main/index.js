import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';
export default class Main extends Component{

  state = {
    users: [],
    message: ""
  };

  componentDidMount(){
    this.loadUsers();
  }

  loadUsers = async () =>{
    const response = await api.get(`/users/all/Gla123`);
    if( response.data.message ){
      this.setState({ message: response.data.message });
    }else{
      this.setState({ users: response.data });
    }
  }

  
  render() {
    const {users, message} = this.state;
    if(users.length <= 0){
      return (
        <div className="erro">
          <Link to={`/users/add`} className="message link-add">Add user</Link>
          <p className="message">{message}</p>
        </div>
      );
    }else{
    return (
      <div className="links">
        <div>
        <Link to={`/users/add`} className="message link-add">Add user</Link>
        </div>
        <div className="users-list">
          {users.map(user => (
            <div className="user" key={user.id}>
              <h2>Name: {user.name} {user.lastname}</h2>
              <strong>Company: {user.company}</strong>
              <div className="actions">
                <Link to={`/users/delete/${user.id}`}>Delete</Link>
                <Link to={`/users/edit/${user.id}`}>Edit</Link>
              </div>
            </div>
          ))
          }
        </div>
      </div>
      )
    }
  };
}
