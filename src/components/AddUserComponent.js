import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../services/UserService";


const AddUserComponent = () => {
    const [id, setId] = useState("");
    const [userName, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();




const saveUser = (e) => {
    e.preventDefault();

    const user = { id, userName, password, email};

    console.log(user);

    UserService.addUser(user)
      .then((response) => {
        console.log(response.data);
        navigate("/users");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (


    <body>
        <div class='container mt-3 mb-3'>
<form class="form-signin">

<div class="form-label-group">
    <input 
    type="text" 
    id="inputUserName" 
    class="form-control" 
    placeholder="Username" 
    value = {userName} 
    onChange={(e) => setName(e.target.value)} 
    required 
    autofocus/>
    <label for="inputUserName">Username</label>
  </div>

  <div class="form-label-group">
    <input
     type="email" 
     id="inputEmail" 
     class="form-control" 
     placeholder="Email address" 
     value = {email} 
     onChange={(e) => setEmail(e.target.value)} 
     required />
    <label for="inputEmail">Email address</label>
  </div>

  <div class="form-label-group">
    <input 
    type="password" 
    id="inputPassword" 
    class="form-control" 
    placeholder="Password" 
    value= {password} 
    onChange={(e) => setPassword(e.target.value)} 
    required/>
    <label for="inputPassword">Password</label>
  </div>

  <div class="checkbox mb-3">
    <label>
      <input type="checkbox" value="remember-me"/> Remember me
    </label>
  </div>
  <button class="btn btn-lg btn-primary btn-block" type="submit" >Sign in</button>

</form>
</div>
</body>

  );
};

export default AddUserComponent;
