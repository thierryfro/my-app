import { Component, React } from "react";
import CreateNoteForm from "./components/CreateNoteForm";
import NoteList from "./components/NoteList";

class App extends Component {
  render() {
    return (
      <div>
        <CreateNoteForm/>
        <NoteList/>
      </div>
    );
  }
}

export default App;
