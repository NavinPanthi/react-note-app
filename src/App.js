import NotesList from "./Components/NotesList";
import Header from "./Components/Header";
import { useState } from "react";
import { useEffect } from "react";

let nextId = 4;
const initialLists = [
  {
    id: 0,
    heading: "ram",
    text: "sita",
    date: "07/34/2023",
    selected: false,
    words: 1,
  },
  {
    id: 1,
    heading: "ram",
    text: "sita",
    date: "07/34/2023",
    selected: false,
    words: 1,
  },
  {
    id: 2,
    heading: "ram",
    text: "sita",
    date: "07/34/2023",
    selected: false,
    words: 1,
  },
];
const App = () => {
  const [notes, setNotes] = useState(initialLists);
  const [isAnyDivSelected, setIsAnyDivSelected] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

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
  const deleteNote = () => {
    setNotes(notes.filter((note) => !note.selected));
  };
  let className = "App container";
  if (darkMode) document.documentElement.classList.add("dark-theme");
  else document.documentElement.classList.remove("dark-theme");
  return (
    <div className={className}>
      <Header
        handleDeleteNote={deleteNote}
        isAnyDivSelected={isAnyDivSelected}
        setIsAnyDivSelected={setIsAnyDivSelected}
        handleAddNote={addNote}
        notes={filteredNotes}
        isCreateModalOpen={isCreateModalOpen}
        setIsCreateModalOpen={setIsCreateModalOpen}
        handleSearch={setSearchText}
        handleDarkMode={setDarkMode}
      />
      <NotesList
        notes={filteredNotes}
        handleAddNote={addNote}
        isCreateModalOpen={isCreateModalOpen}
        handleDivClick={handleDiv}
      />
    </div>
  );
};
export default App;
