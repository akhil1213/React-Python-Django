import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


class Feed extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username:"",
      password:"",
    };
  }
  handleSubmit(event){
      
  }
  render(){
    return (
      <div className="App">
        <div id = "whatwereabout">
          <h3>What we about</h3>
        </div>
      </div>
    );
  }
}

export default Feed;
