import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Login extends Component {


    render() {
        return (
            <div className="login-container container" style={{marginTop:"7rem"}}>
                
                <form>
                <h1 className="text-white">Login</h1>
  <div class="form-group text-white" >
    <label for="exampleInputEmail1" >Kullanıcı adı</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email"/>
   
  </div>
  <div class="form-group text-white" >
    <label for="exampleInputPassword1" >Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>

  <button type="submit" class="btn btn-primary mt-3" >Submit</button>
</form>
            </div>
        )
    }
}
