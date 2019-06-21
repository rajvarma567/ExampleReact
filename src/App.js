import React from 'react';
import logo from './logo.svg';
import './App.css';
import Courses from './components/Course'
let  courses = [
  'react',
  'angular'
]
function App() {
  return (
    <div>
    <Courses data={courses}/>  
   <Courses data={{}}/>  
   </div>
  );
}

export default App;
