import React from 'react';

class AddCourse extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="col-md-6">
            <form >
          <div className="form-group">
    <label for="name">Name</label>
    <input name="courseName"type="name" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Name"/>
  
  </div>
  <div className="form-group">
    <label for="price">Price</label>
    <input name="price"class="form-control" id="price"  placeholder="Enter Price"/>
  </div>
  <div className="form-group">
    <label for="quantity">Quantity</label>
    <input  name="quantity" className="form-control" id="quantity" aria-describedby="emailHelp" placeholder="Enter Quantity"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  </div>
   </div>
         );
    }
}
 
export default AddCourse;