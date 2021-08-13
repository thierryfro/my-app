import { Component, React } from "react";

class CreateNoteForm extends Component {
  render(){
    return (
      <form action="">
        <input type="text" placeholder="Title"/>
        <textarea placeholder="Write your note..."/>
        <button>Create your note</button>
    </form>
    )
  }
}

export default CreateNoteForm
