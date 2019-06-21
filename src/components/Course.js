import React from 'react';
export class Courses extends React.Component {
    render(){      
    return(
        <div>
        <ul>               
         {this.props.data.map(x=> <li key={x.id}>
             name : {x.name}   price: {x.price}
             <button class="btn btn-primary"onClick={()=>this.props.fn(x)}>Details</button>
             </li>)}         
        </ul>
        </div>
    )
}
}

export default Courses;