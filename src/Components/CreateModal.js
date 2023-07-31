const CreateModal = ({ isCreateModalOpen, noteText, setNoteText }) => {
  if (!isCreateModalOpen) return null;

  const handleChange = (e) => {
    setNoteText(e.target.value);
  };

  return (
    <div className="note new container rounded create-modal p-2 m-1 pe-3">
      <div className=" whole rounded ">
        <textarea
          rows="5"
          color="20"
          placeholder="Type to add a note..."
          onChange={handleChange}
          value={noteText}
          className="rounded p-2 "
        ></textarea>
      </div>
      <div className="note-footer d-flex flex-column">
        <span className="text-muted"></span>
      </div>
    </div>
  );
};
export default CreateModal;
