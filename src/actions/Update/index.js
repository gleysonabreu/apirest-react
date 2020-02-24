import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { useParams, Link } from 'react-router-dom';
import './styles.css';
import Loading from '../../componetns/Loading';

export default function Update() {

  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function data(){
      let res  = await api.get(`/users/${id}/Gla123`);
      setLoading(false);
      
      document.querySelector("input[name=company]").value = res.data.company;
      document.querySelector('input[name=name]').value = res.data.name;
      document.querySelector('input[name=lastname]').value = res.data.lastname;
    }
    data();
  }, [id])

  const update = async (event) => {

    event.preventDefault();
    var data = new FormData();
    var company = document.querySelector("input[name=company]");
    var name = document.querySelector('input[name=name]');
    var lastname = document.querySelector('input[name=lastname]');
    var div = document.querySelector(".text-error");
    var submit = document.querySelector("input[name=update-submit]");
    submit.value = "Sending...";
    submit.disabled = 'disabled';
    if(company.value === '' || name.value === '' || lastname.value === ''){
      submit.value = "Send";
      submit.disabled = null;
      div.style.display = "block";
      div.innerHTML = "Fill in all fields.";
    }else{
      data.set("name", name.value);
      data.set("lastname", lastname.value);
      data.set("company", company.value);
      const response = await api({
        method: "post",
        url: `/update/${id}/Gla123`,
        data: data,
        headers: {'Content-Type': 'multipart/form-data'}
      });
      submit.value = "Send";
      submit.disabled = null;
      div.style.display = "block";
      div.innerHTML = response.data.message;

    }

  }

  const mainContent = () => {
    return (
      <div className="add-user">
      <form onSubmit={update} method="post" encType="multipart/form-data">
        <ul>
        <div className="text-error"></div>
          <li><input type="text" name="name" placeholder="Digite um nome" /></li>
          <li><input type="text" name="lastname" placeholder="Digite um sobrenome" /></li>
          <li><input type="text" name="company" placeholder="Digite sua empresa" /></li>
          <div className="actions">
          <input type="submit" name="update-submit" value="send" />
          <Link to={`/`}>Back</Link>
          </div>
        </ul>
      </form>
    </div>
    )
  }
  
  return loading ? <Loading /> : mainContent();
}
