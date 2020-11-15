import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const QUOTES_API = "https://jsonplaceholder.typicode.com/posts/1"

class Posts_Details extends Component {
   /* state = {
        quotes: []
    }

    componentDidMount() {
        this.getCategories()
    }

    // loading data from a remote endpoint 
    getCategories() {
        axios.get(QUOTES_API)
            .then(res => {
                this.setState({ quotes: res.data })
            })
            .catch(err => {
                console.log(err)
            })
    }*/

    render() {
        return (
            <div className="container">
                
                <h1 class="mt-4 mb-3">Post Title
                    <small>by
                        <a href="#">Start Bootstrap</a>
                    </small>
                </h1>

                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="index.html">Home</a>
                    </li>
                    <li class="breadcrumb-item active">Blog Home 2</li>
                </ol>

                <div class="row">
                    <div class="col-lg-8">
                        <img class="img-fluid rounded" src="http://placehold.it/900x300" alt=""></img>
                        <hr></hr>
                        <p>Posted on January 1, 2017 at 12:00 PM</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!</p>

                        <hr></hr>

                        <div class="card my-4">
                            <h5 class="card-header">Leave a Comment:</h5>
                            <div class="card-body">
                                <form>
                                    <div class="form-group">
                                        <textarea class="form-control" rows="3"></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>

                        <div class="media mb-4">
                            <img class="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt=""></img>
                            <div class="media-body">
                                <h5 class="mt-0">Commenter Name</h5>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="card mb-4">
                            <h5 class="card-header">Search</h5>
                            <div class="card-body">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Search for..." />
                                    <span class="inpug-group-append">
                                        <button class="btn btn-secondary" type="button">Go!</button>
                                    </span>
                                </div>
                            </div>
                        </div>


                        <div class="card my-4">
                            <h5 class="card-header">Categories</h5>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <ul class="list-unstyled mb-0">
                                            <li>
                                                <a href="#">Web Design</a>
                                            </li>
                                            <li>
                                                <a href="#">HTML</a>
                                            </li>
                                            <li>
                                                <a href="#">Freebies</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-6">
                                        <ul class="list-unstyled mb-0">
                                            <li>
                                                <a href="#">JavaScript</a>
                                            </li>
                                            <li>
                                                <a href="#">CSS</a>
                                            </li>
                                            <li>
                                                <a href="#">Tutorials</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="card my-4">
                            <h5 class="card-header">Side Widget</h5>
                            <div class="card-body">
                                You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        )
    }
}
export default Posts_Details