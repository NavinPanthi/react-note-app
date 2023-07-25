const Note = ({ id, heading, text, date, selected, handleDivClick}) => {
  let className = "note-body rounded p-2 m-1";
  console.log(selected);
  if(selected){
    className +=" border-yellow";
  }
  return (
    <div className="note" onClick={()=>handleDivClick(id)}>
      <div className={className}>
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
