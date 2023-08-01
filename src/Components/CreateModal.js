import { useState } from "react";
const CreateModal = ({
  isCreateModalOpen,
  noteText,
  setNoteText,
  headingText,
  setHeadingText,
}) => {
  if (!isCreateModalOpen) return null;

  const handleChange = (e) => {
    setNoteText(e.target.value);
  };
  const handleInput = (e) => {
    setHeadingText(e.target.value);
  };
  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent the default behavior of adding a newline in the input field
      const textarea = document.getElementById("note-textarea"); // Get the textarea element by its ID
      if (textarea) {
        textarea.focus(); // Set focus to the textarea element
      }
    }
  };
  const handleTextArea = () => {
    const input = document.getElementById("input-h");

    if (headingText === "") {
      input.focus();
    }
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 46 && noteText.length === 0) {
      const input = document.getElementById("input-h");
      e.preventDefault(); // Prevent the default behavior of deleting content
      input.focus(); // Move the focus to the input field
    }
  };


  return (
    <div className="note new container rounded create-modal p-2 m-1 pe-3">
      <div className=" whole rounded ">
        <input
          className="border-0 input-lg rounded ps-2 pt-2 h-input pe-2 pb-0 "
          onKeyDown={handleInputKeyDown}
          id="input-h"
          onChange={handleInput}
        />
        <textarea
          id="note-textarea"
          rows="5"
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          value={noteText}
          // className={isDisabled ? "disabled-textarea rounded p-2" : "enabled-textarea rounded p-2"}
          // disabled={isDisabled}
          className="rounded  p-2"
          onClick={handleTextArea}
        ></textarea>
      </div>
      <div className="note-footer d-flex flex-column">
        <span className="text-muted"></span>
      </div>
    </div>
  );
};
export default CreateModal;


