import NotesList from "./Components/NotesList";
import Header from "./Components/Header";
import { useState } from "react";
import { useEffect } from "react";

let nextId = 4;
const initialLists = [
  {
    id: 0,
    heading: "Duck",
    text: "A 'duck' refers to a common waterfowl bird from the family Anatidae. Ducks are known for their distinctive quacking sound, webbed feet, and ability to swim on water. They are found in various habitats, including ponds, lakes, rivers, and marshes.  They are found in various habitats, including ponds, lakes, rivers, and marshes.  They are found in various habitats, including ponds, lakes, rivers, and marshes.  They are found in various habitats, including ponds, lakes, rivers, and marshes.",
    date: "07/34/2023",
    selected: false,
    words: 1,
  },
  {
    id: 1,
    heading: "Cow",
    text: "Cows are large domesticated mammals and are one of the most common and economically important livestock animals in the world. ",
    date: "07/34/2023",
    selected: false,
    words: 1,
  },
  {
    id: 2,
    heading: "Lion",
    text: "Lions are majestic and powerful large cats belonging to the Panthera genus. They are part of the Felidae family.",
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
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedText, setEditedText] = useState("");

  useEffect(() => {
    // Check if any array element's object has 'selected' set to true
    const hasSelectedTrue = notes.some((note) => note.selected === true);
    setIsAnyDivSelected(hasSelectedTrue);
  }, [notes]);
  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchText)
  );
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
      />
    </div>
  );
};
export default App;
