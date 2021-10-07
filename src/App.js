import React, { useState } from 'react';
//import Header from './component/Header';
import Post from './component/Post';


const App = () => {

  let planets = [];

  fetch('http://swapi.dev/api/planets')
  .then((responce) => {
    return responce.json();
  })

  .then((data) => {
    data.results.map(planet => {
      planets.push(planet);
      return planets;
    })
    
  }) 

  const [posts, setPosts] = useState(planets
//    [
//      {id: 1, title: "Товар 1", description: "Описание 1"},
//      {id: 2, title: "Товар 2", description: "Описание 2"},
//      {id: 3, title: "Товар 3", description: "Описание 3"}
//    ]
  )
  return (
    <div>
    
      {/* <Header />
      <Post value = {300} />
      <Post value = {{title: "Товар 1", description: "Описание 1"}} />
      <Post value = {{title: "Товар 2", description: "Описание 2"}} />
      <Post value = {{title: "Товар 3", description: "Описание 3"}} />  */}

      {
        posts.map ((post) => {
          console.log(post);
          return <Post post = {post} key = {post.id} />
        })
      }
    </div>


  );
}

export default App;
