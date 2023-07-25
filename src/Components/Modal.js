const Modal = ({ open, onClose, handleDeleteNote }) => {
  if (!open) return null;
  return (
    <div className="modal rounded p-4 border">
      <p>Are you sure want to delete selected notes ?</p>
      <div className="d-flex flex-row justify-conter-around">
        <button className="btn-light btn me-1" onClick={onClose}>
          Cancel
        </button>
        <button className="btn-dark btn ms-1" onClick={()=>{handleDeleteNote(); onClose();}}>
          Delete
        </button>
      </div>
    </div>
  );
};
export default Modal;
