import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBar = () => {
  return (
    <div className="flex items-center px-4 bg-slate-100 rounded-md">
      <input
        type="text"
        placeholder="Search"
        className="w-full text-xs bg-transparent py-[11px] outline-none"
      />
      <FaMagnifyingGlass className="text-slate-400 cursor-pointer hover:text-black" />
    </div>
  )
}

export default SearchBar;