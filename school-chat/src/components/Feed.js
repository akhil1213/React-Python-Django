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
        <form onSubmit={this.handleSubmit}>
          <p>Username:</p>
              <input
              type="text"
              />
          <p>Password:</p>
            <input
              type="text"
            />
            <Link to="/profile">Submit</Link>
        </form>
      </div>
    );
  }
}

export default Feed;
