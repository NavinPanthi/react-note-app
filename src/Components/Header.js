import { MdDeleteForever } from "react-icons/md";
import { MdEditCalendar } from "react-icons/md";
import DeleteModal from "./DeleteModal";
import CreateModal from "./CreateModal";
import { MdSearch } from "react-icons/md";
import { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";

const Header = ({
  handleDeleteNote,
  isAnyDivSelected,
  setIsAnyDivSelected,
  handleAddNote,
}) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isBackButtonClicked, setisBackButtonClicked] = useState(false);
  const [noteText, setNoteText] = useState("");
  console.log(noteText);
  const handleNoteAddition = () => {
    if (noteText.trim().length > 0) {
      setisBackButtonClicked(false);
      handleAddNote(noteText);
      setNoteText("");
      setIsCreateModalOpen(false);
    }
  };
  if (isBackButtonClicked) {
    handleNoteAddition(); // Call the function to add the note
  }

  return (
    <div className="header mt-4">
    <div className="my-notes d-flex flex-row justify-content-between mb-4">
    <div class="name">
      My Notes
    </div>
    <button className="btn theme-btn">
      <MdDarkMode className="theme-icon icons" size="1.6em" />
    </button>
  </div>
    <div className=" mb-4  d-flex flex-nowrap flex-row justify-content-between align-items-center">
      <div className="d-flex flex-row align-items-center">
        <button
          className="btn back-btn "
          disabled={!isCreateModalOpen}
          onClick={() => {
            setIsCreateModalOpen(true);
            setisBackButtonClicked(!isBackButtonClicked);
          }}
        >
          <MdArrowBackIos className="icons me-2 back-icon" size="1.5em" />
        </button>
        <button
          className="btn del-btn"
          disabled={!isAnyDivSelected}
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
          disabled={isCreateModalOpen}
          onClick={() => {
            setIsCreateModalOpen(true);
          }}
        >
          <MdEditCalendar className="icons create-icon ms-2" size="1.6em" />
        </button>
      </div>

      <div className="flex-row d-flex input-group  flex-nowrap align-items-center  ">
        <MdSearch className="search-icon icons ms-1 my-1 " size="1.3em" />
        <input
          type="text"
          className="border-0 input-lg rounded "
          onChange={(e) => e.target.value}
        />
      </div>

      <DeleteModal
        open={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        handleDeleteNote={handleDeleteNote}
      />

      <CreateModal
        open={isCreateModalOpen}
        noteText={noteText}
        setNoteText={setNoteText}
      />
    </div>
    </div>
  );
};
export default Header;
