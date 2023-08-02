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

  const filteredNotes = notes.filter((note) => {
    return (
      note.text.toLowerCase().includes(searchText.toLowerCase()) ||
      note.heading.toLowerCase().includes(searchText.toLowerCase())
    );
  });

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
  const handleDiv = (id) => {
    setNotes((notes) =>
      notes.map((note) => ({
        ...note,
        selected:
          note.id === id ? (note.selected = true) : (note.selected = false),
      }))
    );
  };
  const handleBorder = () => {
    setNotes((notes) =>
      notes.map((note) => ({
        ...note,
        selected: false,
      }))
    );
  };

  const handleDoubleDivClick = (nextNote) => {
    const updatedNotes = notes.filter((note) => note.id !== nextNote.id);
    setNotes([{ ...nextNote, selected: true }, ...updatedNotes]);
  };

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
        handleBorder={handleBorder}
        editedHeading={editedHeading}
        setEditedHeading={setEditedHeading}
      />
    </div>
  );
};
export default App;
