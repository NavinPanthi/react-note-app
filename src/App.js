import NotesList from "./Components/NotesList";
import Header from "./Components/Header";
import { useState } from "react";

let nextId = 4;
const initialLists = [
  {
    id: 0,
    heading: "Heading 1",
    text: "my first note",
    date: "07/24/2023",
    selected: false,
  },
  {
    id: 1,
    heading: "Heading 2",
    text: "my second note",
    date: "07/24/2023",
    selected: false,
  },
  {
    id: 2,
    heading: "Heading 2",
    text: "my third note",
    date: "07/24/2023",
    selected: false,
  },
  {
    id: 3,
    heading: "Heading 2",
    text: "my fourth note",
    date: "07/24/2023",
    selected: false,
  },
];

const App = () => {
  const [notes, setNotes] = useState(initialLists);

  const addNote = (noteText) => {
    const date = new Date();
    const newNotes = {
      id: nextId++,
      heading: "heading",
      text: noteText,
      date: date.toLocaleDateString(),
    };
    console.log(newNotes.id);
    setNotes([...notes, newNotes]);
  };
  const handleDiv = (id) => {
    setNotes((notes) =>
      notes.map((note) => ({
        ...note,
        selected: note.id === id ? !note.selected : note.selected,
      }))
    );
  };
  const deleteNote = () => {
    setNotes(notes.filter((note) => !note.selected));
    console.log("dele");
  };

  return (
    <div className="App container">
      <Header handleDeleteNote={deleteNote} />
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDivClick={handleDiv}
      />
    </div>
  );
};
export default App;
