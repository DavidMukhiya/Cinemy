import React from 'react'
import logo from 'src\\img\\Cinemy_1.jpg'

export const login = () => {
  return (
    <body>
<form class="form-signin">
  <div class="text-center mb-4">
    <img class="mb-4" src={logo} width="72" height="72"/>
  </div>

  <div class="form-label-group">
    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
    <label for="inputEmail">Email address</label>
  </div>

  <div class="form-label-group">
    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
    <label for="inputPassword">Password</label>
  </div>

  <div class="checkbox mb-3">
    <label>
      <input type="checkbox" value="remember-me"/> Remember me
    </label>
  </div>
  <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
  <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
</form>
</body>
  )
}
