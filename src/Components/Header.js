import { MdDeleteForever } from "react-icons/md";
import {MdEditCalendar} from "react-icons/md";

import { MdSearch } from "react-icons/md";
const Header = () => {
  return (
    <div className="header  mb-4 mt-4 p-1 d-flex flex-nowrap flex-row align-items-center">
      <MdDeleteForever className="delete-icon icons me-2 ms-3" size="1.3em" />
      <div class='vertical-line'>|</div>
      <MdEditCalendar className="icons edit-icon ms-2" size="1.3em"/>
      <div class="flex-row d-flex input-group me-3 flex-nowrap align-items-center ">
        <MdSearch className="search-icon icons m-2  " size="1.3em" />
        <input
          type="text"
          className="border-0 input-lg "
          onChange={(e) => e.target.value}
        />
      </div>
    </div>
  );
};
export default Header;
