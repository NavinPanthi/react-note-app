const Note = ({id, heading, text, date}) => {
  return (
    <div className="note">
      <div className="note-body rounded p-2 m-1 ">
        <span>{text}</span>
      </div>
      <div className="note-footer d-flex flex-column">
        <span className="note-heading">{heading}</span>
        <span className="text-muted">{date}</span>
      </div>
    </div>
  );
};
export default Note;
