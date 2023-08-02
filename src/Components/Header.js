import DeleteModal from "./DeleteModal";
import CreateModal from "./CreateModal";
import {
  MdLightMode,
  MdDeleteForever,
  MdDarkMode,
  MdArrowBackIos,
  MdEditCalendar,
} from "react-icons/md";
import { useState } from "react";
import Search from "./Search";
import { useEffect } from "react";

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
  handleBorder,
  deleteNotesWithZeroWords,
}) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [isBackButtonClicked, setisBackButtonClicked] = useState(false);
  const [noteText, setNoteText] = useState("");
  const [headingText, setHeadingText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     deleteNotesWithZeroWords();
  //   }, 2000); // 1000 milliseconds = 1 second
  // });

  const timed = () => {
    setTimeout(() => {
      deleteNotesWithZeroWords(); // Call the second function after a delay of 5 seconds (5000 milliseconds)
    }, 500);
  };
  const handleNoteAddition = () => {
    setisBackButtonClicked(false);
    handleAddNote({ noteText, headingText });
    setNoteText("");
    setHeadingText("");
    setIsCreateModalOpen(false);
  };

  const backButton = !isCreateModalOpen && !isEditModalOpen;

  if (isBackButtonClicked && isEditModalOpen) {
    setIsEditModalOpen(!isEditModalOpen);
    setisBackButtonClicked(false);
  }
  if (isBackButtonClicked && isCreateModalOpen) {
    handleNoteAddition();
  }
  let html = document.documentElement;
  if (isDeleteModalOpen) html.classList.add("less-opacity");
  else html.classList.remove("less-opacity");
  if (darkMode) html.classList.add("dark-theme");
  else html.classList.remove("dark-theme");
  return (
    <div className="header mt-4">
      <div className="my-notes d-flex flex-row justify-content-between mb-4">
        <div className="name">My Notes</div>
        <button
          className="btn theme-btn"
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        >
          {darkMode ? (
            <MdLightMode className="theme-icon icons" size="1.6em" />
          ) : (
            <MdDarkMode className="theme-icon icons" size="1.6em" />
          )}
        </button>
      </div>
      <div className=" mb-4 header2 d-flex flex-nowrap flex-row justify-content-between align-items-center">
        <div className="d-flex flex-row align-items-center">
          <button
            className="btn back-btn "
            disabled={backButton}
            onClick={() => {
              setisBackButtonClicked(!isBackButtonClicked);
              timed();
            }}
          >
            <MdArrowBackIos className="icons me-2 back-icon" size="1.5em" />
          </button>
          <button
            className="btn del-btn"
            disabled={!isAnyDivSelected && !isEditModalOpen}
            onClick={(e) => {
              e.stopPropagation();
              setIsDeleteModalOpen(true);
              setIsAnyDivSelected(!isAnyDivSelected);
              // if (isEditModalOpen) {
              //   setIsEditModalOpen(false);
              // }
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
              setIsAnyDivSelected(false);
              handleBorder();
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
          setIsEditModalOpen={setIsEditModalOpen}
        />
        <CreateModal
          isCreateModalOpen={isCreateModalOpen}
          noteText={noteText}
          headingText={headingText}
          setHeadingText={setHeadingText}
          setNoteText={setNoteText}
        />
      </div>
    </div>
  );
};
export default Header;
