import React, { Component } from 'react';
import "./style.css"

class NoteCard extends Component {
  render() {
    return (
      <section className="note_card">
        <header>
          <h3>Title</h3>
        </header>
        <p>Write your note</p>
      </section>
     );
  }
}

export default NoteCard;
