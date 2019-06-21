import React from 'react';
export class Courses extends React.Component {
    render(){
       
    return(
        <div>
        <ul> 
            {this.props.data.length > 0 ?     
         this.props.data.map(x=> <li key={x}>{x}</li>)       
         : <h1>there are no Courses</h1>}
        </ul>
        </div>
    )
}
}

export default Courses;