import { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
   state = {
    posts: []
   }
componentDidMount() {
  axios.get("https://jsonplaceholder.typicode.com/posts") 
  .then(res=> { 
    const posts=res.data;
    this.setState({posts})
  
  })
}
  render() {
  return (
    <div>
     {this.state.posts.map(post=>
     <p key={post.id}> {post.title}  {post.body}</p> )}
    </div>
  );
}
}
export default App;
