import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const POST_API = "https://jsonplaceholder.typicode.com/posts"

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        this.getCategories()
    }

    // loading data from a remote endpoint 
    getCategories() {
        axios.get(POST_API)
            .then(res => {
                this.setState({ posts: res.data })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div class="container">

            
                <h1 class="mt-4 mb-3">Blog Home Two
              <small>Subheading</small>
                </h1>

                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                    <Link to='/'> <a>Home</a></Link>
                    </li>
                    <li class="breadcrumb-item active">Blog Home 2</li>
                </ol>

                {
                        this.state.posts.map(item => (
                <div class="card mb-4">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-6">
                                <a href="#">
                                    <img class="img-fluid rounded" src="http://placehold.it/750x300" alt=""></img>
                                </a>
                            </div>
                            <div class="col-lg-6">
                                <h2 class="card-title">{item.title}</h2>
                                <p class="card-text">{item.body}</p>
                                <Link to='/1'><a class="btn btn-primary">Read More &rarr;</a></Link>
                                
                            </div>
                        </div>
                    </div>
                    <div class="card-footer text-muted">
                        Posted on January 1, 2017 by
                <a> UserId: {item.id}</a> 
                    </div>
                </div>
                     ))
                    }

               
                <ul class="pagination justify-content-center mb-4">
                    <li class="page-item">
                        <a class="page-link" href="#">&larr; Older</a>
                    </li>
                    <li class="page-item disabled">
                        <a class="page-link" href="#">Newer &rarr;</a>
                    </li>
                </ul>

            </div>

        )
    }
}
export default Posts