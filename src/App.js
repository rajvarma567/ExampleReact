import React from 'react';
import logo from './logo.svg';
import './App.css';
import Courses from './components/Course';
import CourseDetails from './components/CourseDetails';
let  courses = [
  {
    id: 1,
    name: 'raj',
    price: 5000,
    duration: 10
  },
  {
    id: 2,
    name: 'varma',
    price: 6000,
    duration: 20
  },
  {
    id: 3,
    name: 'naidu',
    price: 7000,
    duration: 30 
  }
]

export class  App extends React.Component {
  constructor(){
    super();
    this.state = {courseDetails : []};
    this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick(x) {
    console.log(x);
  this.setState({
    courseDetails : x
  });
  }
  
  render(){
    console.log('came inside the re render method....')
    console.log(this.state.courseDetails);
  return (
    <div>
    <Courses data={courses} fn={this.handleClick}/>
    
    <CourseDetails  data1={this.state.courseDetails}/>
    
   </div>
  );
}
}

export default App;
