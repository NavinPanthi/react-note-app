const Note = () => {
  return (
    <div className="note">
      <div className="note-body rounded p-2 m-1 ">
        <span>Hello! This is our first note.</span>
      </div>
      <div className="note-footer d-flex flex-column">
        <span className="note-heading">de</span>
        <span className="text-muted">07/23/2023</span>
      </div>
    </div>
  );
};
export default Note;
