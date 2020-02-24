import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { useParams, Link } from "react-router-dom";
import '../../pages/Main/styles.css';
import Loading from '../../componetns/Loading';

export default function Delete() {
  
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Gleyson Abreu - Delete users";
    async function data(){
      const res = await api.get(`/users/delete/${id}/Gla123`);
      setLoading(false);
      const inner = document.querySelector(".message_erro");
      inner.innerHTML = res.data.message;
    }
    data();
    
  }, [id]);

  const mainContent = () => {
    return (
      <div className="users-list">
          <article className="user nodata-found-user">
            <h2 className="message message_erro"></h2>
            <Link to={`/`} name="edi">BACK</Link>
          </article>
          
        </div>
    )
  }

  return loading ? <Loading /> : mainContent();
}
