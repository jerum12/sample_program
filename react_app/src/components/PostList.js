import React, { Component } from 'react';

class PostList extends Component {
  //initialization
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
      message: '',
    };
  }
  //   increment(){

  //   }
  //mounting
  async componentDidMount() {
    //https://jsonplaceholder.typicode.com/posts
    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then()
    // .catch()
    try {
      //   window.addEventListener('resize', () => {
      //     console.log('resize');
      //   });

      const response = await fetch('https://jsonplaceholder.typicode.com/posts');

      //updating
      if (!response.ok) {
        this.setState({ loading: false, message: 'Error while fetching posts', post: [] });
        return;
      }
      const data = await response.json();

      //updating
      this.setState({ loading: false, message: 'Successfully fetched posts', posts: data });
    } catch (error) {
      console.error(`Error while fetching posts => ${error}`);
      //updating
      this.setState({ loading: false, message: 'Error while fetching posts', post: [] });
    }
  }

  //   componentWillUnmount() {
  //     window.removeEventListener('resize', () => {});
  //   }

  render() {
    const { loading, message, posts } = this.state;

    return (
      <div>
        <h1>PostList</h1>
        <p>Message : {message}</p>
        {loading ? (
          <p>Loading...........</p>
        ) : (
          <ul>{posts && posts.map((post) => <li key={post.id}>{post.title}</li>)}</ul>
        )}
      </div>
    );
  }
}

export default PostList;
