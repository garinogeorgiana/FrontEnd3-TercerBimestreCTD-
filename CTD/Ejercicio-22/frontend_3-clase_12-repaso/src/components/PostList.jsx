import React from "react";
import PostItem from "./PostItem.jsx";
import PostForm from "./PostForm.jsx";

class PostList extends React.Component {
  state = {
    posts: [
      {
        id: 1,
        title: "Post Title 1",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        id: 2,
        title: "Post Title 2",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    ]
  };

  handleSubmit = event => {
    event.preventDefault();
        
    //buscamos el ultimo id para generar el de nuevos post pero antes los ordenamos por id para no generar por error ids duplicados despues de borrar alguno.
    let postList = this.state.posts
    postList.sort((a,b)=> b.id - a.id)
    let lastElement = postList[0]
    
    //Asignamos el id al nuevo post en base al id mas grande que tenemos en el array, de no tener ningun elemento en el array, le asignamos un 1.
    let newPostId;
    lastElement != undefined ? newPostId = lastElement.id+1 : newPostId = 1;
    
    let newPost;
    
    // checkeamos que Titulo como Content no esten vacios
    (event.target[0].value.trim() != "" && event.target[1].value.trim() != "") ? (
        newPost = {id: newPostId, title: event.target[0].value, content:event.target[1].value} 
    ) : (
        console.log("Tanto title como Content tiene que tener contenido.")
    );
    
    // dado el caso que el nuevo post se creo sin problemas, lo agregamos al array de posts y ordenamos el array con el ordenamiento original.
    newPost === "" ? 
      console.log("No se pudo crear un nuevo post") : 
      postList.push(newPost)
      postList.sort((a,b)=> a.id - b.id)
      this.setState({
        posts:postList
      });
  };

  handleDelete = postToDelete => {
    console.log(postToDelete.id)
     let postList = this.state.posts

    //traemos un array nuevo con la condicion de que no agregue el elemento que tenga ese id.
    let newPostList = postList.filter(element => element.id != postToDelete.id)
    console.log(newPostList)
     this.setState({
      posts:newPostList
    })

    //buscamos el elemento por su id con un find, despues con un forEach buscamos su indice y por ultimo lo removemos con un splice.
    //me parece mas legible y simple el metodo de arriba para filtrar.
    /* let indexToDelete;
    let IdToDelete = postList.find(element => element.id === postToDelete.id).id
    postList.forEach((element, index)=> element.id === IdToDelete ? indexToDelete = index : "")
    postList.splice(indexToDelete,1)
    this.setState({
      posts:postList
    }) */
    
  };

  render() {
    let posts = this.state.posts;
    return (
      <div>
        <PostForm onSubmit={this.handleSubmit} />
        {posts.map(post => (
          <PostItem key={post.id} post={post} onDelete={this.handleDelete} />
        ))}
      </div>
    );
  }
}

export default PostList;
