import React from 'react'
class CourseDetails extends React.Component {
    state = {  }
    render() { 
        return(      
            <div>
                <p>hiii</p>
               {
                   this.props.data1 ?
                   <div>
                   <p>name:{this.props.data1.name}</p>
                   <p>price: {this.props.data1.price}</p>
                   </div>
                   : <p>no data</p>
               }
            </div>
        )
    }
}
 
export default CourseDetails;