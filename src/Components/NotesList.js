import Note from "./Note";
import AddNote from "./AddNote";
const NotesList = ({ notes, handleAddNote, handleDivClick }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <div key={note.id}>
          <Note
            id={note.id}
            heading={note.heading}
            text={note.text}
            date={note.date}
            selected={note.selected}
            // style={{
            //   background: note.selected ? "#f0f0f0" : "transparent",
            // }}
            handleDivClick = {handleDivClick}
          />
        </div>
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};
export default NotesList;
