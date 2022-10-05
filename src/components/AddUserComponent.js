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
    <label for="inputUserName">ID</label>
    <input 
    type="number" 
    id="inputID" 
    class="form-control" 
    placeholder="ID" 
    value = {id} 
    onChange={(e) => setId(e.target.value)} 
    required 
    autofocus/>
    
  </div>

<div class="form-label-group">
    <label for="inputUserName">Username</label>
    <input 
    type="text" 
    id="inputUserName" 
    class="form-control" 
    placeholder="Username" 
    value = {userName} 
    onChange={(e) => setName(e.target.value)} 
    required 
    autofocus/>
    
  </div>

  <div class="form-label-group">
    <label for="inputEmail">Email address</label>
    <input
     type="email" 
     id="inputEmail" 
     class="form-control" 
     placeholder="Email address" 
     value = {email} 
     onChange={(e) => setEmail(e.target.value)} 
     required />
    
  </div>

  <div class="form-label-group">
    <label for="inputPassword">Password</label>
    <input 
    type="password" 
    id="inputPassword" 
    class="form-control" 
    placeholder="Password" 
    value= {password} 
    onChange={(e) => setPassword(e.target.value)} 
    required/>
    
  </div>

  <div class="checkbox mb-3">
    <label>
      <input type="checkbox" value="remember-me"/> Remember me
    </label>
  </div>
    <button class="btn btn-lg btn-primary btn-block"
        type="submit" 
        onClick={saveUser}>
        Sign in
    </button>

</form>
</div>
</body>

  );
};

export default AddUserComponent;
