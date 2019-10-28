import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';

export default function Home(){
    return (
        <div>
             <h2>Welcome To Your Dashboard</h2>
             <h3>Our Services:</h3>
             <ul>
             <li>You can add an appoiment</li>
             <li>You can see your appoiments</li>
             <li>You can update your appoiments</li>
             <li>You can delete your appoiments</li>
             </ul>
      </div>
           )
}
