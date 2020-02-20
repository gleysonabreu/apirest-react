import React from 'react';
import api from '../../services/api';
import { useParams, Link } from "react-router-dom";
import '../../pages/Main/styles.css';

export default function Delete() {
  
  const { id } = useParams();

  const del = async () => {
    const res = await api.get(`/users/delete/${id}/Gla123`);
    const inner = document.querySelector(".message_erro");
    inner.innerHTML = res.data.message;
  }

  del();

  return (

    <div className="users-list">
          <article className="user nodata-found-user">
            <h2 className="message message_erro"></h2>
            <Link to={`/`} name="edi">BACK</Link>
          </article>
          
        </div>
  );
}
