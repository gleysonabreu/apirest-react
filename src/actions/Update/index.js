import React from 'react';
import api from '../../services/api';
import { useParams, Link } from 'react-router-dom';
import './styles.css';

export default function Update() {

  const { id } = useParams();

  const returnData = async () => {
    let res  = await api.get(`/users/${id}/Gla123`);
    document.querySelector("input[name=company]").value = res.data.company;
    document.querySelector('input[name=name]').value = res.data.name;
    document.querySelector('input[name=lastname]').value = res.data.lastname;
  }

  returnData();

  const update = async (event) => {

    event.preventDefault();
    var data = new FormData();
    var company = document.querySelector("input[name=company]");
    var name = document.querySelector('input[name=name]');
    var lastname = document.querySelector('input[name=lastname]');
    var div = document.querySelector("#textM");
    if(company === '' || name === '' || lastname === ''){
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

      div.innerHTML = response.data.message;
    }

  }

  
  return (
    <div className="form">

      <form onSubmit={update} method="post" encType="multipart/form-data">
        <ul>
          <li><input type="text" name="name" placeholder="Digite um nome" /></li>
          <li><input type="text" name="lastname" placeholder="Digite um sobrenome" /></li>
          <li><input type="text" name="company" placeholder="Digite sua empresa" /></li>
          <li><input type="submit" name="submit" value="send" /></li>
          <br />
          <li><Link to={`/`} className="link-back">Back</Link></li>
        </ul>
      </form>
        <div className="textM" id="textM"></div>
    </div>
  );
}
