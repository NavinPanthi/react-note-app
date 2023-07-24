import NotesList from "./Components/NotesList";
import Header from "./Components/Header";
import { useState } from "react";


let nextId = 4;
 const initialLists= [
  { id: 0, heading: "Heading 1", text: "my first note", date:'07/24/2023'},
  { id: 1, heading: "Heading 2", text: "my second note", date:'07/24/2023' },
  { id: 2, heading: "Heading 2", text: "my third note", date:'07/24/2023' },
  { id: 3, heading: "Heading 2", text: "my fourth note", date:'07/24/2023' },
];

const App = () => {
  const [notes, setNotes] = useState(initialLists);

  const addNote = (noteText) => {
    const date = new Date();
    const newNotes = {id:nextId++, heading:"heading", text:noteText, date:date.toLocaleDateString()}
    console.log(newNotes.id);
    setNotes([...notes, newNotes]);
  }
  return (
    <div className="App container">
      <Header />
      <NotesList notes={notes} handleAddNote={addNote}/>
      
    </div>
  );
};
export default App;
