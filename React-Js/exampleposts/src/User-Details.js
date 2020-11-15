import React, { Component } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const USER_API = "http://akhtar1611.pythonanywhere.com/rest/userapi/"

class User_Details extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        this.getCategories()
    }

    // loading data from a remote endpoint 
    getCategories() {
        axios.get(USER_API)
            .then(res => {
                this.setState({ users: res.data })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div class="container">
                    <Link to='/'> <a class="navbar-brand">Example Blog</a> </Link>
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

                <ol class="breadcrumb">
                    <li class="breadcrumb-item active">User Deatis</li>
                </ol>
                <table className="table table-sm table-striped">
                    <thead>
                        <tr>
                            <th scope="col">User Id</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>


                    {
                        this.state.users.map(item => (

                            <tbody>
                                <tr>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                    <td>{item.email}</td>
                                </tr>
                            </tbody>

                        ))
                    }
                </table>
            </div>
        )
    }
}
export default User_Details