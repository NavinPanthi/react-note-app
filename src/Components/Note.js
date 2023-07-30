import { useState } from "react";
import { MdCircle } from "react-icons/md";
import { useEffect } from "react";

const Note = ({
  note,
  id,
  heading,
  text,
  date,
  selected,
  words,
  handleDivClick,
  handleDoubleDivClick,
  editedText,
  setEditedText,
  isEditModalOpen,
  setIsEditModalOpen,
  editedId,
  setEditedId,
}) => {
  const [editing, setEditing] = useState(false);

  let className = "note-body rounded p-2 ";
  if (selected) {
    className += " border-yellow";
  }

  const characterLimit = 5000;
  const noteTextL = text.length;
  const handleEditedId = (eId) => {
    setEditedId(eId);
  };
  let classNames = "rounded p-2";
  // useEffect to handle changes to isEditModalOpen

  const handleChange = (e) => {
    setEditedText(e.target.value);
    let words = e.target.value.trim().split(/\s+/);
    let wordsLength = words.length;
    if(e.target.value===""){
      wordsLength=0;
    }
    handleDoubleDivClick({ ...note, text: e.target.value, id: editedId, words: wordsLength });
  };

  if (isEditModalOpen) {
    console.log("editedId", editedId);
    console.log("isEditModalOpen------------------------", isEditModalOpen);
    return (
      <div className="note new container rounded create-modal p-2 m-1 pe-3">
        <div className=" whole rounded ">
          <textarea
            rows="5"
            color="20"
            placeholder="Type to add a note..."
            onChange={handleChange}
            value={editedText}
            className={classNames}
          ></textarea>
        </div>
        <div className="note-footer d-flex flex-column">
          <span className="text-muted">
            {characterLimit - noteTextL} remaining
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="note"
        onDoubleClick={() => {
          console.log("doubleClicked", id);
          handleEditedId(id);
          setEditedText(text);
          setIsEditModalOpen(true);
        }}
        onClick={() => {
          handleDivClick(id);
        }}
      >
        <div className={className}>
          <span>{note.text}</span>
        </div>
        <div className="note-footer d-flex flex-column">
          <span className="note-heading">{note.heading}</span>
          <div className="d-flex flex-row justify-content-center align-items-center">
            <span className="text-muted">
              {note.words} {note.words > 1 ? "words" : "word"}
            </span>
            <MdCircle
              className="icons circle-icon text-muted m-1"
              size="0.3em"
            />
            <span className="text-muted">{note.date}</span>
          </div>
        </div>
      </div>
    );
  }
};
export default Note;
