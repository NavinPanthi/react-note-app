import NotesList from "./Components/NotesList";
import Header from "./Components/Header";
import { useState } from "react";

let nextId = 4;
const initialLists = [

];

const App = () => {
  const [notes, setNotes] = useState(initialLists);
  const [isAnyDivSelected, setIsAnyDivSelected] = useState(false);
  const addNote = (noteText) => {
    const countWords = () => {
      const words = noteText.trim().split(/\s+/);
      return words.length;
    };
    const date = new Date();
    const newNotes = {
      id: nextId++,
      heading: "heading",
      text: noteText,
      date: date.toLocaleDateString(),
      selected:false,
      words: countWords()
    };
    setNotes([...notes, newNotes]);
  };
  const handleDiv = (id) => {
    setIsAnyDivSelected(true);
    setNotes((notes) =>
      notes.map((note) => ({
        ...note,
        selected: note.id === id ? !note.selected : note.selected,
      }))
    );
  };
  const deleteNote = () => {
    setNotes(notes.filter((note) => !note.selected));
  };

  return (
    <div className="App container">
      <Header
        handleDeleteNote={deleteNote}
        isAnyDivSelected={isAnyDivSelected}
        setIsAnyDivSelected={setIsAnyDivSelected}
        handleAddNote={addNote}
        notes={notes}
      />
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDivClick={handleDiv}
      />
    </div>
  );
};
export default App;
