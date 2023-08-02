import { MdSearch } from "react-icons/md";
const Search = ({ handleSearch }) => {
  return (
    <div className="flex-row d-flex input-group search flex-nowrap align-items-center  ">
      <MdSearch className="search-icon icons ms-1 me-1 my-1 " size="1.3em" />
      <input
        type="text"
        className="border-0 input-lg rounded "
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};
export default Search;
