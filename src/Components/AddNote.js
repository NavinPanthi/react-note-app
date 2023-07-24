import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");

const handleChange = (e) => {
    setNoteText(e.target.value);
}

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText();
    }
  };
  return (
    <div className="note new">
      <div className="note-body rounded p-2 m-1 ">
        <textarea
          rows="5"
          cols="20"
          placeholder="Type to add a note..."
          onChange={handleChange}
          value={noteText}
        ></textarea>
      </div>
      <div className="note-footer d-flex flex-column">
        <button
          type="button"
          className="btn btn-light"
          onClick={handleSaveClick}
        >
          Save
        </button>
        <span className="text-muted">200 remaining</span>
      </div>
    </div>
  );
};

export default AddNote;
