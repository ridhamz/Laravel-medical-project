import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Home from './Home'
import UserProfile from './UserProfile'
import Addmedicalapp from './Addmedicalapp'
import AllAppoiments from './AllAppoiments'
import Edit from './Edit'
import axios from 'axios'
import Show from './Show'
import EditProfileUser from './EditProfileUser'
export default function Header(){
    return (

             <Router>
             <Link className="btn btn-outline-primary btn-sm bb" to="/home">Home</Link>
              <Link className="btn btn-outline-danger btn-sm bb"  to="/home/add/medical/app">Add Appointment</Link>
              <Link className="btn btn-outline-danger btn-sm bb" to="/home/all/appoiments">Your Appointment</Link>
              <Link className="btn btn-outline-danger btn-sm bb" to="/home/User-profile">Your Profile</Link>
              <hr />

              <Route exact path='/home' component={Home} />
              <Route exact path="/home/add/medical/app" component={Addmedicalapp} />
              <Route exact path='/home/all/appoiments' component={AllAppoiments} />
              <Route exact path='/home/User-profile' component={UserProfile} />
              <Route exact path="/home/appointment/edit/:id" component={Edit} />
              <Route exact path="/home/appointment/show/:id" component={Show} />
              <Route exact path="/home/user/edit/:id" component={EditProfileUser} />
             </Router>
           )
}
