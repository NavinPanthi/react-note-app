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

  const handleChange = (e) => {
    setEditedText(e.target.value);
    let words = e.target.value.trim().split(/\s+/);
    let wordsLength = words.length;
    if (e.target.value === "") {
      wordsLength = 0;
    }
    handleDoubleDivClick({
      ...note,
      text: e.target.value,
      id: editedId,
      words: wordsLength,
      date: current,
    });
  };

  if (isEditModalOpen) {
    return (
      <div className="note new container rounded create-modal p-2 m-1 pe-3">
        <div className=" whole rounded ">
          <textarea
            rows="5"
            color="20"
            placeholder="Type to add a note..."
            onChange={handleChange}
            value={editedText}
            className="rounded p-2"
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
