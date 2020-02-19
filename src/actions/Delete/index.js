import React from 'react';
import api from '../../services/api';
import { useParams, Link } from "react-router-dom";
import './styles.css';

export default function Delete() {
  
  const { id } = useParams();

  const del = async () => {
    const res = await api.get(`/users/delete/${id}/Gla123`);
    const inner = document.querySelector(".message_erro");
    inner.innerHTML = res.data.message;
  }

  del();

  return (
    <div>
      <div id="message_erro" className="message_erro"></div><br/>
      <Link to={`/`} id="message_erro">Back</Link>
    </div>
  );
}
