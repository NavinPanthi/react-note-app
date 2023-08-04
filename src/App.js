import NotesList from "./Components/NotesList";
import Header from "./Components/Header";
import { useState } from "react";
import { useEffect } from "react";

let nextId = 4;
const initialLists = [];
const App = () => {
  const [notes, setNotes] = useState(initialLists);
  const [isAnyDivSelected, setIsAnyDivSelected] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedText, setEditedText] = useState("");
  const [editedHeading, setEditedHeading] = useState("");

  useEffect(() => {
    // Check if any array element's object has 'selected' set to true
    const hasSelectedTrue = notes.some((note) => note.selected === true);
    setIsAnyDivSelected(hasSelectedTrue);
  }, [notes]);
  //For user experience, a newly created note with 0 words is saved for 0.5 sec and get deleted automatically. 
  const deleteNotesWithZeroWords = () => {
    setNotes((prevNotes) =>
      prevNotes.filter((note) => {
        if (note.text === "" && note.heading === "") {
          // If the condition is false, include the note in the result
          return false;
        } else {
          // If the condition is true, filter out the note (exclude from the result)
          return true;
        }
      })
    );
  };
  // Only filtered notes are passed to notes as props.
  const filteredNotes = notes.filter((note) => {
    return (
      note.text.toLowerCase().includes(searchText.toLowerCase()) ||
      note.heading.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  //Adding note
  const addNote = ({ noteText, headingText }) => {
    const countWords = () => {
      if (noteText.length === 0 && headingText.length === 0) {
        return 0;
      }
      const textWords = noteText.trim().split(/\s+/);
      const headingWords = headingText.trim().split(/\s+/);
      if (noteText === "") {
        textWords.length = 0;
      }
      if (headingWords === "") {
        headingWords.length = 0;
      }
      const totalWords = textWords.length + headingWords.length;
      return totalWords;
    };
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    const current = currentHour + ":" + currentMinute;
    const newNotes = {
      id: nextId++,
      heading: headingText,
      text: noteText,
      date: current,
      selected: true,
      words: countWords(),
    };
    setNotes([newNotes, ...notes]);
  };
  // the note div on which user press clicked get selected true and finally setAnyDivSelected get true and yellow border appears.
  const handleDiv = (id) => {
    setNotes((notes) =>
      notes.map((note) => ({
        ...note,
        selected:
          note.id === id ? (note.selected = true) : (note.selected = false),
      }))
    );
  };
  //if any div is selected, and you want to click on create new note button, then previously slected note get unselected,
  // and new note get selected.
  const handleBorder = () => {
    setNotes((notes) =>
      notes.map((note) => ({
        ...note,
        selected: false,
      }))
    );
  };
  // On double clicking note, note is set to editing, and when edited note is saved it is displayed to first position of notes-list.
  const handleDoubleDivClick = (nextNote) => {
    const updatedNotes = notes.filter((note) => note.id !== nextNote.id);
    setNotes([{ ...nextNote, selected: true }, ...updatedNotes]);
  };
  // user click on a note and after if they press delete button, selected note will get deleted.
  const deleteNote = () => {
    setNotes(notes.filter((note) => !note.selected));
  };
  if (isCreateModalOpen) {
    document.documentElement.classList.add("cm");
  } else {
    document.documentElement.classList.remove("cm");
  }
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
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        handleBorder={handleBorder}
        deleteNotesWithZeroWords={deleteNotesWithZeroWords}
      />
      <NotesList
        notes={filteredNotes}
        isCreateModalOpen={isCreateModalOpen}
        handleDivClick={handleDiv}
        handleDoubleDivClick={handleDoubleDivClick}
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        editedText={editedText}
        setEditedText={setEditedText}
        setIsAnyDivSelected={setIsAnyDivSelected}
        editedHeading={editedHeading}
        setEditedHeading={setEditedHeading}
      />
    </div>
  );
};
export default App;
