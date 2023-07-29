// import Note from "./Note";
// import AddNote from "./AddNote";
// const NotesList = ({ notes, handleAddNote, handleDivClick }) => {
//   return (
//     <div className="notes-list">
//       {notes.map((note) => (
//         <div key={note.id}>
//           <Note
//             id={note.id}
//             heading={note.heading}
//             text={note.text}
//             date={note.date}
//             selected={note.selected}

//             handleDivClick = {handleDivClick}
//           />
//         </div>
//       ))}
//       <AddNote handleAddNote={handleAddNote} />
//     </div>
//   );
// };
// export default NotesList;

import Note from "./Note";
import { useState } from "react";
// import AddNote from "./AddNote";
const NotesList = ({
  notes,
  handleDivClick,
  isCreateModalOpen,
  handleDoubleDivClick,
  editedText,
  setEditedText,
  isEditModalOpen,
  setIsEditModalOpen,
}) => {
  const [editedId, setEditedId] = useState(null);
  if (isCreateModalOpen) return null;
  
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <div key={note.id}>
          <Note
            note={note}
            id={note.id}
            heading={note.heading}
            text={note.text}
            date={note.date}
            selected={note.selected}
            words={note.words}
            handleDivClick={handleDivClick}
            handleDoubleDivClick={handleDoubleDivClick}
            editedText = {editedText}
            setEditedText={setEditedText}
            isEditModalOpen={isEditModalOpen}
            setIsEditModalOpen={setIsEditModalOpen}
            editedId={editedId}
            setEditedId = {setEditedId}
          />

        </div>
      ))}
    </div>
  );
};
export default NotesList;
