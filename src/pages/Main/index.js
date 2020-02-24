import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Loading from '../../componetns/Loading';
import './styles.css';
export default class Main extends Component{

  state = {
    users: [],
    message: "",
    loading: true,
  };

  componentDidMount(){
    document.title = "Gleyson Abreu - Home page";
    this.loadUsers();
  }

  loadUsers = async () =>{
    const response = await api.get(`/users/all/Gla123`);
    if( response.data.message ){
      this.setState({ message: response.data.message, loading: false });
    }else{
      this.setState({ users: response.data, loading: false });
    }

  }

  mainContent = () => {
    const {users, message} = this.state;
    if(users.length <= 0){
      return (
        <div className="users-list">
          <article className="user nodata-found">
            <h2 className="message">{message}</h2>
          </article>
          
        </div>
      );
    }else{
    return (
        <div>
        <div className="users-list">
          {users.map(user => (
            <article className="user" key={user.id}>
              <h2><strong>Name:</strong> {user.name} {user.lastname}</h2>
              <h3><strong>Company:</strong> {user.company}</h3>
              <div className="actions">
                <Link name="del" to={`/users/delete/${user.id}`}>Delete</Link>
                <Link name="edi" to={`/users/edit/${user.id}`}>Edit</Link>
              </div>
            </article>
          ))
          }
        </div>
        
        </div>
      )
    }
  }

  
  render() {
    return this.state.loading ? <Loading /> : <this.mainContent />;
  };
}
