import { MdDeleteForever } from "react-icons/md";
const Note = () => {
  return (
    <div className="note p-2 m-2 bg-light border">
      <span>Hello! This is our first note.</span>
      <div className="note-footer mt-3 ">
        <small>07/23/2023</small>
        <MdDeleteForever className="delete-icon" size="1.3em" />
      </div>
    </div>
  );
};
export default Note;
