import { MdDeleteForever } from "react-icons/md";
import Modal from "./Modal";
import { MdSearch } from "react-icons/md";
import { useState } from "react";
import { MdDarkMode } from "react-icons/md";

const Header = ({
  handleDeleteNote,
  isAnyDivSelected,
  setIsAnyDivSelected,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" header  mb-4 mt-4  d-flex flex-nowrap flex-row justify-content-between align-items-center">
      <button
        className="btn del-btn"
        disabled={!isAnyDivSelected}
        onClick={() => {
          setIsOpen(true);
          setIsAnyDivSelected(false);
        }}
      >
        <MdDeleteForever className="delete-icon icons" size="1.6em" />
      </button>

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        handleDeleteNote={handleDeleteNote}
      />
      <div className="flex-row d-flex input-group  flex-nowrap align-items-center  ">
        <MdSearch className="search-icon icons ms-1 my-1 " size="1.3em" />
        <input
          type="text"
          className="border-0 input-lg rounded "
          onChange={(e) => e.target.value}
        />
      </div>
      <button className="btn theme-btn">
        <MdDarkMode className="theme-icon icons" size="1.6em" />
      </button>
    </div>
  );
};
export default Header;
