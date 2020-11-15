import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './App.css';


class Login extends Component {


    render() {
        return (
            <div>
            <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container">
            <Link to='/'> <a class="navbar-brand">User Details</a> </Link>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">


                        <li class="nav-item">
                            <Link to='/posts'>
                            <a class="nav-link">Posts</a>
                            </Link>
                           
                        </li>
                        <li class="nav-item">
                            <Link to='/Login'>
                            <a class="nav-link">Login</a>
                            </Link>
                           
                        </li>
                        <li class="nav-item">
                            <Link to='/Register'>
                            <a class="nav-link">Register</a>
                            </Link>
                           
                        </li>

                    </ul>
                </div>
            </div>
        </nav><br></br><br></br><br></br>
            <div class="container login">

            
            <h1 class="mt-4 mb-3">Login
              <small>Form</small>
            </h1>
            <ol class="breadcrumb">
              <li class="breadcrumb-item active">Login</li>
            </ol>
            
            <div class="row">
              <div class="col-lg-4 mb-4">
                <form name="sentMessage" id="contactForm" novalidate>
                  <div class="control-group form-group">
                    <div class="controls">
                      <label>Email*</label>
                      <input type="email" class="form-control" id="email" required data-validation-required-message="Please enter your email." />
                      <p class="help-block"></p>
                    </div>
                  </div>
                  <div class="control-group form-group">
                    <div class="controls">
                      <label>Password*</label>
                      <input type="password" class="form-control" id="password" required data-validation-required-message="Please enter your password." />
                    </div>
                  </div>
                  <div id="success"></div>
                  
                  <button type="submit" class="btn btn-primary" id="login-btn">Login</button>
                </form>
              </div>
            </div>
            
        
          </div></div>

        )
    }
}
export default Login