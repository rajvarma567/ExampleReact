import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,NavLink} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import AddCourse from './components/AddCourse';
import CourseDetails from './components/CourseDetails';

ReactDOM.render(
<BrowserRouter>
<ul class="nav">
  <li class="nav-item">
  <NavLink activeStyle={{color:'red'}} exact to="/">Home</NavLink>
  </li>
  <li class="nav-item">
  <NavLink  activeStyle={{color:'red'}} exact to="/add">Add Course</NavLink>
  </li>
  <li class="nav-item">
  <NavLink activeStyle={{color:'red'}} exact to="/details">Course Details</NavLink>
  </li>
 
</ul>
<Route path="/" exact component={App}/>
<Route path="/add" exact component={AddCourse}/>
<Route path="/details" exact component={CourseDetails}/>
</BrowserRouter>, document.getElementById('root'));


