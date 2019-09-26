import React, { Component } from 'react';

import TopAppBar from './Components/TopAppBar';
import PostList from './Components/Postlist';
import Footer from './Components/Footer';
import Media from './Components/Media';

class App extends Component {
  render() {
    return (
      <div>
        <TopAppBar />
        <PostList />
        <Footer/>
        <Media />
      </div>
    );
  }
}
export default App;
