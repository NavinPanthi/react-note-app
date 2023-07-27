import { MdCircle } from "react-icons/md";
const Note = ({ id, heading, text, date, selected, words, handleDivClick }) => {
  let className = "note-body rounded p-2 ";

  if (selected) {
    className += " border-yellow";
  }
  return (
    <div className="note" onClick={() => handleDivClick(id)}>
      <div className={className}>
        <span>{text}</span>
      </div>
      <div className="note-footer d-flex flex-column">
      <span className="note-heading">{heading}</span>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <span className="text-muted">
            {words} {words > 1 ? "words" : "word"}
          </span>
          <MdCircle className="icons circle-icon text-muted m-1" size="0.3em" />
          <span className="text-muted">{date}</span>
        </div>
        
      </div>
    </div>
  );
};
export default Note;
