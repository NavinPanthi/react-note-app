import { useRef, useEffect } from "react";
const DeleteModal = ({
  open,
  onClose,
  handleDeleteNote,
  setIsEditModalOpen,
}) => {
  const deleteButtonRef = useRef(null);
  // is user press enter on keyboard, delete button which is shown on deleteMOdal is auto clicked.
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter" && deleteButtonRef.current) {
        deleteButtonRef.current.click();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  if (!open) return null;
  return (
    <div className="delete-modal rounded p-4 border">
      <p>Are you sure want to delete selected notes ?</p>
      <div className="d-flex flex-row justify-conter-around">
        <button className="btn-light btn me-1" onClick={onClose}>
          Cancel
        </button>
        <button
          ref={deleteButtonRef}
          className="btn-dark btn ms-1"
          onClick={() => {
            handleDeleteNote();
            onClose();
            setIsEditModalOpen(false);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default DeleteModal;
