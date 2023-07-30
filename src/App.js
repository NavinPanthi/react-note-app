import NotesList from "./Components/NotesList";
import Header from "./Components/Header";
import { useState } from "react";
import { useEffect } from "react";

let nextId = 4;
const initialLists = [
  
];
const App = () => {
  const [notes, setNotes] = useState(initialLists);
  const [isAnyDivSelected, setIsAnyDivSelected] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedText, setEditedText] = useState("");
  console.log("isCreateModalOpen", isCreateModalOpen);
  useEffect(() => {
    // Check if any array element's object has 'selected' set to true
    const hasSelectedTrue = notes.some((note) => note.selected === true);
    setIsAnyDivSelected(hasSelectedTrue);
  }, [notes]);
  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchText)
  );
  const addNote = (noteText) => {
    const countWords = () => {
      if(noteText===""){
        return 0;
      }
      const words = noteText.trim().split(/\s+/);
      return words.length;
    };
    const date = new Date();
    const newNotes = {
      id: nextId++,
      heading: "heading",
      text: noteText,
      date: date.toLocaleDateString(),
      selected: false,
      words: countWords(),
    };
    setNotes([...notes, newNotes]);
  };
  const handleDiv = (id) => {
    setNotes((notes) =>
      notes.map((note) => ({
        ...note,
        selected:
          note.id === id ? (note.selected = true) : (note.selected = false),
      }))
    );
  };

  // const handleDoubleDivClick = (doubleClickedId) => {

  //   setNotes((notes) =>
  //   notes.map((note) => ({
  //     ...note,
  //     text: note.id === doubleClickedId ? (note.text = editedText):note.text,
  //   }))
  // );
  //}
  const handleDoubleDivClick = (nextNote) => {
    console.log("NextNote:",nextNote.id);
    setNotes((notes) =>
    notes.map((note) => {
      if(note.id === nextNote.id){
        return nextNote;
      }
      else 
      return note;
    })
  );
  }
  
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
        isCreateModalOpen={isCreateModalOpen}
        setIsCreateModalOpen={setIsCreateModalOpen}
        handleSearch={setSearchText}
        isEditModalOpen = {isEditModalOpen}
        setIsEditModalOpen = {setIsEditModalOpen}
      />
      <NotesList
        notes={filteredNotes}
        isCreateModalOpen={isCreateModalOpen}
        handleDivClick={handleDiv}
        handleDoubleDivClick= {handleDoubleDivClick}
        isEditModalOpen = {isEditModalOpen}
        setIsEditModalOpen = {setIsEditModalOpen}
        editedText = {editedText}
        setEditedText={setEditedText}
      />
    </div>
  );
};
export default App;
