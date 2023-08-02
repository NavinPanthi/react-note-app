import { MdCircle } from "react-icons/md";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
const Note = ({
  note,
  handleDivClick,
  handleDoubleDivClick,
  editedText,
  setEditedText,
  isEditModalOpen,
  setIsEditModalOpen,
  editedId,
  setEditedId,
  setIsAnyDivSelected,
  handleBorder,
  editedHeading,
  setEditedHeading,
}) => {
  // const divRef = useRef(null);

  // function handleDocumentClick(event) {
  //   if (divRef.current && !divRef.current.contains(event.target)) {
  //     handleBorder();
  //     return;
  //   }
  // }

  // useEffect(() => {
  // const noteList = document.querySelector(".notes-list");
  // document.body.addEventListener("mousedown", handleClickOutside);
  // return () => {
  //   document.body.removeEventListener("mousedown", handleClickOutside);
  // };
  // noteList.addEventListener("mousedown", handleClickOutside);
  // return () => {
  //   noteList.removeEventListener("mousedown", handleClickOutside);
  // };
  // });
  // function handleClickOutside(event) {
  //   if (divRef.current && !divRef.current.contains(event.target)) {
  //     handleBorder();
  //   }
  // }
  let className = "note-body rounded p-2 ";
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  const current = currentHour + ":" + currentMinute;

  if (note.selected) {
    className += " border-yellow";
  }
  const handleEditedId = (eId) => {
    setEditedId(eId);
  };

  const handleTextArea = () => {
    const input = document.getElementById("input-h");

    if (editedHeading === "") {
      input.focus();
    }
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 46 && editedText.length === 0) {
      const input = document.getElementById("input-h");
      e.preventDefault(); // Prevent the default behavior of deleting content
      input.focus(); // Move the focus to the input field
    }
    if (e.key === "ArrowUp") {
      // Move the focus to the input element
      const input = document.getElementById("input-h");
      if (input) {
        input.focus();
      }
    }
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
  let totalLength;
  const handleChange = (e) => {
    setEditedText(e.target.value);
    let words = e.target.value.trim().split(/\s+/);
    let wordsLength = words.length;
    let heading = editedHeading.trim().split(/\s+/);
    let headingLength = heading.length;
    if (editedHeading === "") {
      headingLength = 0;
    }

    if (e.target.value === "") {
      wordsLength = 0;
    }
    totalLength = headingLength + wordsLength;

    handleDoubleDivClick({
      ...note,
      text: e.target.value,
      heading: editedHeading,
      id: editedId,
      words: totalLength,
      date: current,
    });
  };
  const handleInput = (e) => {
    setEditedHeading(e.target.value);
    let heading = e.target.value.trim().split(/\s+/);
    let headingLength = heading.length;
    let words = editedText.trim().split(/\s+/);
    let wordsLength = words.length;
    if (editedText === "") {
      wordsLength = 0;
    }

  
    if (e.target.value === "") {
      headingLength = 0;
    }
    totalLength = headingLength + wordsLength;
    handleDoubleDivClick({
      ...note,
      text: editedText,
      heading: e.target.value,
      id: editedId,
      words: totalLength,
      date: current,
    });
  };

  if (isEditModalOpen) {
    return (
      <div className="note new container rounded create-modal p-2 m-1 pe-3">
        <div className=" whole rounded ">
          <input
            className="border-0 input-lg rounded ps-2 pt-2 h-input pe-2 pb-0 "
            onKeyDown={handleInputKeyDown}
            id="input-h"
            onChange={handleInput}
            value={editedHeading}
          />
          <textarea
            id="note-textarea"
            rows="5"
            onKeyDown={handleKeyDown}
            onChange={handleChange}
            value={editedText}
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
  } else {
    return (
      <div
        // ref={divRef}
        className="note"
        onDoubleClick={(e) => {
          handleEditedId(note.id);
          setEditedText(note.text);
          setEditedHeading(note.heading);
          setIsEditModalOpen(true);
        }}
        onClick={(e) => {
          e.preventDefault();
          handleDivClick(note.id);
        }}
      >
        <div className={className} tabIndex={0}>
          <div className="note-top-heading">{note.heading}</div>
          <div className="note-text">{note.text}</div>
        </div>
        <div className="note-footer d-flex flex-column mt-1">
          <span className="note-heading px-2">{note.heading}</span>
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
