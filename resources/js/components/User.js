import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free' 
import '../../css/app.css'
import Header from './Header'
import Home from './Home'
import UserProfile from './UserProfile'
import Addmedicalapp from './Addmedicalapp'
import axios from 'axios'

function User() {
    return (
        <div className="container home">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <Header />

                    </div>
                </div>
            </div>

    );
}

export default User;

if (document.getElementById('User-profile')) {
    ReactDOM.render(<User />, document.getElementById('User-profile'));
}
