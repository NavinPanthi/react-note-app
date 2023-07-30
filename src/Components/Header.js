import { MdDeleteForever } from "react-icons/md";
import { MdEditCalendar } from "react-icons/md";
import DeleteModal from "./DeleteModal";
import CreateModal from "./CreateModal";

import { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import Search from "./Search";

const Header = ({
  handleDeleteNote,
  isAnyDivSelected,
  setIsAnyDivSelected,
  handleAddNote,
  isCreateModalOpen,
  setIsCreateModalOpen,
  handleSearch,
  isEditModalOpen,
  setIsEditModalOpen,
}) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [isBackButtonClicked, setisBackButtonClicked] = useState(false);
  const [noteText, setNoteText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleNoteAddition = () => {
    setisBackButtonClicked(false);
    handleAddNote(noteText);
    setNoteText("");
    setIsCreateModalOpen(false);
  };
  const backButton = !isCreateModalOpen && !isEditModalOpen;
  console.log("Backbutton disabled: ", backButton);

  if (isBackButtonClicked && isEditModalOpen) {
    setIsEditModalOpen(!isEditModalOpen);
    setisBackButtonClicked(false);
  }
  if (isBackButtonClicked && isCreateModalOpen) {
    handleNoteAddition();
  }

  if (darkMode) document.documentElement.classList.add("dark-theme");
  else document.documentElement.classList.remove("dark-theme");
  return (
    <div className="header mt-4">
      <div className="my-notes d-flex flex-row justify-content-between mb-4">
        <div className="name">My Notes</div>
        <button
          className="btn theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          <MdDarkMode className="theme-icon icons" size="1.6em" />
        </button>
      </div>
      <div className=" mb-4 header2 d-flex flex-nowrap flex-row justify-content-between align-items-center">
        <div className="d-flex flex-row align-items-center">
          <button
            className="btn back-btn "
            disabled={backButton}
            onClick={() => {
              setisBackButtonClicked(!isBackButtonClicked);
            }}
          >
            <MdArrowBackIos className="icons me-2 back-icon" size="1.5em" />
          </button>
          <button
            className="btn del-btn"
            disabled={!isAnyDivSelected && !isEditModalOpen}
            onClick={() => {
              setIsDeleteModalOpen(true);
              setIsAnyDivSelected(!isAnyDivSelected);
            }}
          >
            <MdDeleteForever className="delete-icon icons" size="1.6em" />
          </button>
          <div className="vertical-line ms-2">|</div>
          <button
            className="btn create-btn"
            disabled={isCreateModalOpen || isEditModalOpen}
            onClick={() => {
              setIsCreateModalOpen(true);
            }}
          >
            <MdEditCalendar className="icons create-icon ms-2" size="1.6em" />
          </button>
        </div>

        <Search handleSearch={handleSearch} />

        <DeleteModal
          open={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          handleDeleteNote={handleDeleteNote}
        />
        <CreateModal
          isCreateModalOpen={isCreateModalOpen}
          noteText={noteText}
          setNoteText={setNoteText}
        />
      </div>
    </div>
  );
};
export default Header;
